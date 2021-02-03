import React from "react";

import logo from "../../images/enactus-n-brand-diap.svg";

function Footer() {
  return (
    <div>
      <footer id='footer' className='bg-navy edge--top--reverse'>
        <div className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-lg-4 mb-5 mb-lg-0'>
                <a href='https://www.enactus.nl/en/' title='Enactus Nederland'>
                  <img className='img-fluid' src={logo} alt='enactus logo' />
                </a>
              </div>

              <div className='col-md-6 col-lg-4 mb-5 mb-md-0'>
                <ul className='list-unstyled'>
                  <li>
                    <h4 className='text-white'>
                      <span className='text-yellow'>En</span>trepreneurial
                    </h4>
                    <p className='pl-3 text-white'>
                      Igniting business innovation with integrity and passion.{" "}
                    </p>
                  </li>
                  <li>
                    <h4 className='text-white'>
                      <span className='text-yellow'>Act</span>ion
                    </h4>
                    <p className='pl-3 text-white'>
                      Action. The experience of social impact that sparks social
                      enterprise.{" "}
                    </p>
                  </li>
                  <li>
                    <h4 className='text-yellow'>Us</h4>
                    <p className='pl-3 text-white'>
                      student, academic and business leaders collaborating to
                      create a better world.
                    </p>
                  </li>
                </ul>
              </div>

              <div className='col-md-6 col-lg-4 text-md-right contact-us'>
                <h4 className='text-yellow'>
                  Contact <span className='text-white'>US</span>
                </h4>
                <p className='pl-3 text-white'>
                  Drienerlolaan 5, Enschede, 7522NB
                </p>
                <a
                  className='pl-3 text-yellow'
                  href='mailto:contact@enactus.org'>
                  enactus.utwente@gmail.com
                </a>
                <br />
                <a
                  className='pl-3 text-yellow'
                  href='mailto:contact@enactus.org'>
                  contact@enactus.org
                </a>

                <h4 className='text-yellow'>
                  <span className='text-white'>Get</span> Involved
                </h4>
                <a href='/home/join' className='pl-3 text-yellow'>
                  Become a Partner!
                </a>
                <br />
                <a
                  className='pl-3 text-yellow'
                  href='https://secure.qgiv.com/for/enactus/'>
                  Donate
                </a>
                <ul className='socials align-self-end'>
                  <li className='list-inline-item'>
                    <a
                      href='https://www.facebook.com/EnactusNetherlands'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a
                      href='https://twitter.com/EnactusNL'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a
                      href='https://www.instagram.com/enactusnetherlands/'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a
                      href='https://www.linkedin.com/company/enactus-netherlands/'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a
                      href='https://www.youtube.com/user/enactus'
                      target='_blank'
                      rel='noreferrer'>
                      <i className='fab fa-youtube'></i>
                    </a>
                  </li>
                </ul>
                <p className='pl-3 text-grey'>
                  Webdesign & Development:{" "}
                  <a
                    className=' text-grey'
                    href='https://bastianbueldpersonalsite.herokuapp.com/'>
                    Bastian Büld
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
        integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
        crossOrigin='anonymous'></script>
      <script
        src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
        integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
        crossOrigin='anonymous'></script>
    </div>
  );
}

export default Footer;
