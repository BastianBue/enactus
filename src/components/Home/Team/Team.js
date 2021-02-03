import React from "react";
import { useStaticQuery } from "gatsby";

import CarouselSlide from "./CarouselSlide";
import SlideItem from "./SlideItem";

function HomePageTeam() {
  const teamData = useStaticQuery(teamQuery);
  const members = teamData.allContentfulTeamMember.nodes;

  return (
    <div id='our-team'>
      <div className='container'>
        <h2 className='text-dark-grey'>
          Our <br />
          <span className='text-yellow'>Team</span>
        </h2>
      </div>
      <div className='our-team'>
        <div
          id='carousel'
          className='carousel slide d-flex justify-content-between'
          data-ride='carousel'>
          <div className='container'>
            <div className='carousel-inner'>
              {members.map((member, index) => {
                if (members.length > 0) {
                  if (index === 0) {
                    return (
                      <CarouselSlide classes='carousel-item active'>
                        <SlideItem member={member} />
                        <SlideItem member={members[index + 1]} />
                        <SlideItem member={members[index + 2]} />
                      </CarouselSlide>
                    );
                  } else {
                    if (index % 3 === 0) {
                      return (
                        <CarouselSlide classes='carousel-item '>
                          <SlideItem member={member} />
                          <SlideItem member={members[index + 1]} />
                          <SlideItem member={members[index + 2]} />
                        </CarouselSlide>
                      );
                    }
                  }
                } else {
                  return (
                    <CarouselSlide classes='carousel-item '>
                      <SlideItem slideType='cta' />
                    </CarouselSlide>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-around carousel-controls mt-5'>
          <a
            className='carousel-control-prev'
            href='#carousel'
            role='button'
            data-slide='prev'>
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carousel'
            role='button'
            data-slide='next'>
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const teamQuery = graphql`
  query {
    allContentfulTeamMember {
      nodes {
        lastName
        name
        picture {
          file {
            url
          }
        }
      }
    }
  }
`;

export default HomePageTeam;
