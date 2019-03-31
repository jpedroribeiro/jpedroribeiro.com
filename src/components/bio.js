/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />

            <p>
              <b>Hello!</b> <br />
              I’m a Brazilian front-end developer living in London. This website
              features some of my{" "}
              <a
                href="https://github.com/jpedroribeiro"
                rel="noopener noreferrer"
                target="_blank"
              >
                latest projects
              </a>{" "}
              and my thoughts on anything web related.
              <br />
              {` `} You can find me on{" "}
              <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>,{" "}
              <a href={`https://instagram.com/${social.instagram}`}>
                Instagram
              </a>
              , and{" "}
              <a href={`https://www.linkedin.com/in/${social.linkedin}/`}>
                LinkedIn
              </a>
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          instagram
          linkedin
        }
      }
    }
  }
`;

export default Bio;
