import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// Utilities
import kebabCase from "lodash/kebabCase";

import { Link, graphql } from "gatsby";

class TagsPage extends React.Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { group },
        site: {
          siteMetadata: { title },
        },
      },
    } = this.props;

    const thisTitle = `Tags`;

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title={thisTitle} />
        <h1>List of all tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
