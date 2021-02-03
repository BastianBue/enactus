import React from "react";

import HomePageProjects from "./Projects/Projects";
import HomePageTeam from "./Team/Team";

import titleImg from "../../images/enactus-group.jpg";
import whatIsEnactus from "../../images/what-is-enactus.jpg";
import PartnerSection from "./Partners/Partner";

function Home() {
  return (
    <div>
      <div id='title-img' className='container'>
        <img
          decoding='sync'
          loading='lazy'
          className='title-img'
          src={titleImg}
          alt='enactus-group'
        />
      </div>

      <div id='what-is-enactus'>
        <div className='container'>
          <h2>
            What is
            <br />
            <span className='text-yellow'> En-Act-Us</span>
          </h2>
          <div className='row'>
            <div className='col-md-12 col-lg-8  mt-2'>
              <h4 className='text-white'>
                En-Act-Us
                <br />
                <span className='text-yellow'>Twente</span>
              </h4>
              <p className='pl-3'>
                We are a worldwide known organization active in 37 countries
                that enables students to realize their ideas into projects.Our
                focus lies on sustainable development goals, in order to create
                a positive social impact on the world.
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.{" "}
              </p>
            </div>

            <div className='col-md-12 col-lg-4 mb-5 mt-2'>
              <h4 className='text-white'>
                <span className='text-yellow'>En</span>trepreneurial
              </h4>
              <p className='pl-3'>
                Igniting business innovation with integrity and passion.{" "}
              </p>
              <h4 className='text-white'>
                <span className='text-yellow'>Act</span>ion
              </h4>
              <p className='pl-3 '>
                Action. The experience of social impact that sparks social
                enterprise.{" "}
              </p>
              <h4 className='text-yellow'>Us</h4>
              <p className='pl-3'>
                {" "}
                student, academic and business leaders collaborating to create a
                better world.{" "}
              </p>
            </div>

            <div className='col-md-12 col-lg-12 mb-5 mt-2 d-flex justify-content-center align-items-start'>
              <div className='video-wrapper'>
                <a
                  rel='noreferrer'
                  target='blank'
                  className='video'
                  href='https://www.youtube.com/watch?v=yZQrEqCj_I4'>
                  <div className='video-container'>
                    <i className='fas fa-3x fa-play  text-grey'></i>
                    <img src={whatIsEnactus} alt='what-is-enactus' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomePageProjects />

      <HomePageTeam />

      <PartnerSection />
    </div>
  );
}

export default Home;
