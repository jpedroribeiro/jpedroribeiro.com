import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { graphql } from "gatsby";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const {
      data: {
        site: {
          siteMetadata: { title },
        },
      },
    } = this.props;
    const { status } = this.state;

    const thisTitle = `Contact Me`;

    return (
      <Layout location={this.props.location} title={title}>
        <Seo title={thisTitle} />
        <h1>Send your message:</h1>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xeqpqqor"
          method="POST"
          className={"contact"}
        >
          <label htmlFor={"name"}>Name:</label>
          <input type="text" name="name" required />
          <label htmlFor={"email"}>Email:</label>
          <input type="email" name="email" required />
          <label htmlFor={"message"}>Message:</label>
          <textarea name="message" rows={5} required />
          {status === "SUCCESS" ? (
            <p className={"success"}>Thanks!</p>
          ) : (
            <button>Submit</button>
          )}
          {status === "ERROR" && (
            <p className={"error"}>Ooops! There was an error.</p>
          )}
        </form>
      </Layout>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
