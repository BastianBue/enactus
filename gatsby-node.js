const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve("src/templates/projectTemplate.js");
    resolve(
      graphql(`
        query {
          allContentfulProject(sort: { fields: date, order: DESC }) {
            edges {
              node {
                name
                date
                description {
                  description
                }
                longtext {
                  longtext
                }
                image {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulProject.edges.forEach((edge) => {
          createPage({
            path: "projects/" + edge.node.name.toLowerCase().replace(/ /g, ""),
            component: projectTemplate,
            context: {
              slug:
                "projects/" + edge.node.name.toLowerCase().replace(/ /g, ""),
              name: edge.node.name,
              description: edge.node.description.description,
              url: edge.node.image.file.url,
              date: edge.node.date,
              longtext: edge.node.longtext.longtext,
            },
          });
        });
        return;
      })
    );
  });
};
