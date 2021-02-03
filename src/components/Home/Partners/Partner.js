import React from "react";
import { useStaticQuery } from "gatsby";

import bastianBüldBrand from "../../../images/brandLogoFull.png";

import CarouselItem from "./CarouselItem";

function PartnerSection() {
  const partnerData = useStaticQuery(teamQuery);
  const partners = partnerData.allContentfulPartner.edges;

  return (
    <div id='our-partners'>
      <div className='container'>
        <div className='our-partners'>
          <h2>
            Our <br />
            <span className='text-yellow'>Partners</span>
          </h2>
          <div
            id='partner-carousel'
            className='carousel slide'
            data-ride='carousel'>
            <div className='carousel-inner'>
              <div className='carousel-item active '>
                <a
                  href='https://bastianbueldpersonalsite.herokuapp.com/'
                  rel='noreferrer'
                  target='_blank'>
                  <img
                    className='bastian-bueld'
                    src={bastianBüldBrand}
                    alt='BastianBüld'
                  />
                  <h3 className='mt-4'>Bastian Büld</h3>
                  <h4 className='mt-1 Gold'>Gold</h4>
                  <p className='mt-3'>Web design and development.</p>
                  <p>Click for more information!</p>
                </a>
              </div>

              {partners.map((partner) => {
                return <CarouselItem partner={partner} />;
              })}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-around  mt-5'>
          <a
            className='carousel-control-prev'
            href='#partner-carousel'
            role='button'
            data-slide='prev'>
            <span
              className='carousel-control-prev-icon text-dark-blue'
              aria-hidden='true'></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#partner-carousel'
            role='button'
            data-slide='next'>
            <span
              className='carousel-control-next-icon '
              aria-hidden='true'></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const teamQuery = graphql`
  {
    allContentfulPartner {
      edges {
        node {
          name
          subscriptionType
          childrenContentfulPartnerDescriptionTextNode {
            description
          }
          url
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

export default PartnerSection;
