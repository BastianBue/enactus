import React from "react";
import { useStaticQuery, Link } from "gatsby";

import { convertDate } from "../../../util/convertDate";

function HomePageProjects() {
  const projectData = useStaticQuery(projectQuery);
  const projects = projectData.allContentfulProject.edges;
  projects.forEach((project) => {
    project.node.date = convertDate(project.node.date);
    project.node.slug =
      "/projects/" + project.node.name.toLowerCase().replace(/ /g, "");
  });

  return (
    <div id='projects'>
      <div className='container bg-yellow py-2'>
        <h2 className='heading-right'>
          Our <br />
          <span className='text-yellow'> Projects</span>
        </h2>
        <div className='row'>
          {projects.length > 0 && (
            <div className='col-lg-4 col-md-6'>
              <Link to={projects[0].node.slug}>
                <div className='project-card'>
                  <div className='card-header'>
                    <img src={projects[0].node.image.file.url} alt='' />
                  </div>
                  <div className='card-footer'>
                    <h4 className='text-yellow'>{projects[0].node.name}</h4>
                    <p className='text-white'>{projects[0].node.date}</p>
                    <p className='text-grey'>
                      {projects[0].node.description.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
          {projects.length > 1 && (
            <div className='col-lg-4 col-md-6'>
              <Link to={projects[1].node.slug}>
                <div className='project-card'>
                  <div className='card-header'>
                    <img src={projects[1].node.image.file.url} alt='' />
                  </div>
                  <div className='card-footer'>
                    <h4 className='text-yellow'>{projects[1].node.name}</h4>
                    <p className='text-white'>{projects[1].node.date}</p>
                    <p className='text-grey'>
                      {projects[1].node.description.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div className='col-lg-4 col-md-6'>
            <div className='project-card'>
              <Link to='/projects'>
                <div className='card-footer'>
                  <h4 className='text-white'>
                    View all of Our{" "}
                    <span className='text-yellow'>Projects</span>
                  </h4>

                  <p className='text-white'>
                    Click here to view all of our past and present Projects.
                  </p>
                  <i className='fas fa-arrow-right fa-2x'></i>
                </div>
              </Link>
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

export default HomePageProjects;
