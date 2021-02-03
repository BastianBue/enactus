import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import logo from "../../images/enactus-n-brand.svg";
import "bootstrap";

function Header() {
  return (
    <div>
      <Helmet>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='Enactus Twente NL' content='' />
        <meta
          name='keywords'
          content='enactus, Entrepreneurial, Action, better Future, together'
        />
        <meta name='author' content='Bastian Büld' />
        <meta
          name='description'
          content='What is Enactus? We are a worldwide known organization active in 37 countries that enables students to realize their ideas into projects that could run for years.'
        />
        <title>Enactus | Twente</title>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.14.0/css/all.css'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.14.0/css/v4-shims.css'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Orbitron:wght@800;900&family=Roboto&display=swap'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='css/magnific-popup.css' />
      </Helmet>
      <div className='vertical-nav' id='sidebar'>
        <div className='d-flex flex-column align-items-start h-100'>
          <div className='py-4 px-3  '>
            <button
              id='sidebarCollapse'
              className='navbar-toggler d-flex'
              type='button'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <div className='media d-flex align-items-center'>
                <i className='fas fa-times  mr-2 text-yellow'></i>
                <h4 className='text-white'>Close</h4>
              </div>
            </button>
          </div>
          <div className='w-100'>
            <h5 className='bg-dark-grey px-3 py-4 mb-0'>Page Navigation</h5>
            <ul className='nav flex-column mb-0'>
              <li className='nav-item'>
                <Link to='/'>
                  <a href='/' className='nav-link ml-2 text-yellow'>
                    <i className='fas fa-project-diagram mr-1'></i>
                    <span className='text-white'>Home</span>
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/projects'>
                  <a
                    href='/home/projects'
                    className='nav-link ml-2 text-yellow'>
                    <i className='fas fa-project-diagram mr-1'></i>
                    <span className='text-white'>Projects</span>
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/gallery'>
                  <a href='/home/gallery' className='nav-link ml-2 text-yellow'>
                    <i className='fa fa-picture-o mr-1'></i>
                    <span className='text-white'>Gallery</span>
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/join'>
                  <a href='/home/join' className='nav-link ml-2 text-yellow'>
                    <i className='fas fa-user-friends mr-1'></i>
                    <span className='text-white'>Join us!</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-auto w-100'>
            <h5 className='bg-dark-grey px-3 py-4 mb-0'>Socials</h5>
            <ul className='socials ml-2 mb-50'>
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
          </div>
        </div>
      </div>
      <section id='head-bar'>
        <div className='container'>
          <div className='row'>
            <nav className='navbar w-100'>
              <div className='justify-content-between align-items-center d-flex w-100'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a
                      className='nav-link page-brand'
                      href='https://www.utwente.nl/en/'
                      target='_blank'
                      rel='noreferrer'>
                      University Twente
                    </a>
                  </li>
                </ul>
                <ul className='list-inline d-md-inline-flex'>
                  <li className='list-inline-item'>
                    <a
                      className='nav-link enactus-item'
                      href='https://enactus.org/'
                      target='_blank'
                      rel='noreferrer'>
                      Enactus Worldwide
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </section>
      <header id='header'>
        <div className='container'>
          <div className='row align-items-center'>
            <nav className='navbar w-100 navbar-expand-md navbar-light '>
              <a href='/' title='Enactus Twente'>
                <img className='navbar-brand' src={logo} alt='Enactus Twente' />
              </a>
              <button
                id='sidebarCollapse'
                className='navbar-toggler'
                type='button'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>

              <div
                className='collapse navbar-collapse mr-auto'
                id='navigationbar-toggle'>
                <ul className='navbar-nav w-100'>
                  <li className='nav-item ml-auto'>
                    <Link to='/'>
                      <a className='nav-link' href='/home'>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/projects'>
                      <a className='nav-link' href='/home/projects'>
                        Projects
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/gallery'>
                      <a className='nav-link' href='/home/gallery'>
                        Gallery
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/join'>
                      <a className='nav-link' href='/home/join'>
                        Join Us
                      </a>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      target='_blank'
                      rel='noreferrer'
                      href='https://secure.qgiv.com/for/enactus/'>
                      Donate
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className='breadcrumb'></div>
        </div>
        <div className='header-banner'></div>
      </header>
    </div>
  );
}

export default Header;
