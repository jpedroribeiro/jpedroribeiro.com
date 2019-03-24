const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Create redirects
  const redirectBatch = [
    { f: `/blog/`, t: `/` },
    { f: `/portfolio/`, t: `/` },
    { f: `/contact/`, t: `/` },
    { f: `/sideprojects/`, t: `/` },
    { f: `/tag/front-end-development/`, t: `/` },
    { f: `/tag/html/`, t: `/` },
    { f: `/tag/css/`, t: `/` },
    { f: `/tag/apis/`, t: `/` },
    { f: `/tag/a11y/`, t: `/` },
    { f: `/tag/web-design/`, t: `/` },
    { f: `/tag/http/`, t: `/` },
    { f: `/tag/typography/`, t: `/` },
  ];
  for (var { f: f, t: t } of redirectBatch1) {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
      isPermanent: true,
    });
  }

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
