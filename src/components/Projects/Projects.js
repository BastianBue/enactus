import React from "react";
import { useStaticQuery, Link } from "gatsby";
import { convertDate } from "../../util/convertDate";

function Projects() {
  const projectData = useStaticQuery(projectQuery);
  const projects = projectData.allContentfulProject.edges;
  const today = new Date();
  const futureProjects = [];
  const pastProjects = [];

  projects.forEach((project) => {
    const projectDate = new Date(project.node.date);
    project.node.slug =
      "/projects/" + project.node.name.toLowerCase().replace(/ /g, "");
    if (projectDate > today) {
      futureProjects.push(project);
    } else {
      pastProjects.push(project);
    }
  });

  return (
    <div id='projects-page'>
      <div id='futureProjects'>
        <div id='projects'>
          <div class='container bg-yellow py-2'>
            <h2 class='heading-left'>
              Our <br />
              <span class='text-yellow'>future Projects</span>
            </h2>
            <div class='row'>
              {futureProjects.map((project) => {
                return (
                  <div class='col-lg-4 col-md-6'>
                    <div class='project-card'>
                      <Link to={project.node.slug}>
                        <div class='card-header'>
                          <img src={project.node.image.file.url} />
                        </div>
                        <div class='card-footer'>
                          <h4 class='text-yellow'>{project.node.name}</h4>
                          <p class='text-white'>
                            {convertDate(project.node.date)}
                          </p>
                          <p class='text-grey'>
                            {project.node.description.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id='pastProjects'>
        <div id='projects'>
          <div class='container bg-yellow py-2'>
            <h2 class='heading-right'>
              Our <br />
              <span class='text-yellow'>past Projects</span>
            </h2>
            <div class='row'>
              {pastProjects.length === 0 && (
                <h1>It seems there is nothing here!</h1>
              )}
              {pastProjects.map((project) => {
                return (
                  <div class='col-lg-4 col-md-6'>
                    <div class='project-card'>
                      <Link to={project.node.slug}>
                        <div class='card-header'>
                          <img src={project.node.image.file.url} />
                        </div>
                        <div class='card-footer'>
                          <h4 class='text-yellow'>{project.node.name}</h4>
                          <p class='text-white'>
                            {convertDate(project.node.date)}
                          </p>
                          <p class='text-grey'>
                            {project.node.description.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projectQuery = graphql`
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
`;

export default Projects;
