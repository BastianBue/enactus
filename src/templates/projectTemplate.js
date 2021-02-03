import React from "react";

import Layout from "../components/Layout/Layout";

import { convertDate } from "../util/convertDate";

function ProjectPage(props) {
  const project = props.pathContext;
  return (
    <Layout>
      <div id='project'>
        <div class='container pb-5'>
          <h1>{project.name}</h1>
          <h4 class='text-yellow ml-3 mt-2'>{convertDate(project.date)}</h4>
          <h5 class='mt-2 ml-3'>{project.description}</h5>
          <div class='.d-flex-inline  flex-wrap align-items-start '>
            <div class='row'>
              <div class='col-lg-8'>
                <p class='mt-3 mb-5 ml-3 mr-3'>{project.longtext}</p>
              </div>
              <div class='col-lg-4'>
                <img
                  class='mt-3 mb-2 ml-3 mr-3 box-shadow-comic'
                  src={project.url}
                  alt='project-img'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProjectPage;
