const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // Create redirects
  const redirectBatch = [
    { f: `/blog/`, t: `/` },
    { f: `/portfolio/`, t: `/` },
    { f: `/sideprojects/`, t: `https://github.com/jpedroribeiro` },
    { f: `/tag/front-end-development/`, t: `/` },
    { f: `/tag/html/`, t: `/` },
    { f: `/tag/css/`, t: `/` },
    { f: `/tag/apis/`, t: `/` },
    { f: `/tag/a11y/`, t: `/` },
    { f: `/tag/web-design/`, t: `/` },
    { f: `/tag/http/`, t: `/` },
    { f: `/tag/typography/`, t: `/` },
  ];
  for (var { f: f, t: t } of redirectBatch) {
    createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t,
      isPermanent: true,
    });
  }

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const tagTemplate = path.resolve(`./src/templates/tag.js`);
  const contactTemplate = path.resolve(`./src/pages/contact.js`);

  return graphql(
    `
      {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
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

    // Create tag pages
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });

    createPage({
      path: `/contact/`,
      component: contactTemplate,
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
