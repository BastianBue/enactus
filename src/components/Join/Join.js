import React from "react";

import titleImg from "../../images/enactus-group.jpg";

function Join() {
  return (
    <div id='join-us'>
      <div id='title-img' className='container'>
        <div className='mx-3'>
          <img
            decoding='sync'
            loading='lazy'
            className='title-img'
            src={titleImg}
            alt='enactus-group'
          />
        </div>
      </div>
      <div class='container'>
        <div class='row d-flex justify-content-center'>
          <div class='col-lg-4 col-md-6 my-3'>
            <div class='become-partner box-shadow-comic'>
              <h3 class='ml-2 text-yellow'>
                Become a <span>Member</span>!
              </h3>
              <p class='mt-3 text-white'>
                Become a part of Enactus Berlin and use the opportunity to get
                personally involved in building the team, to take on social
                responsibility and to bring innovative projects to life. New
                exciting tasks, unique experiences and a great network are
                waiting for you. Let's make the world a better place together.
                We are looking forward to hearing from you.
              </p>
            </div>
          </div>

          <div class='col-lg-4 col-md-6 my-3'>
            <div class='become-partner box-shadow-comic text-yellow'>
              <h3 class='ml-2'>
                Become a <span>Partner</span>!
              </h3>
              <p class='mt-3 text-white'>
                Enactus helps create a better world and future! Help us by
                Partnering up and maybe even recruiting some of the students you
                partnner with for your business. It is your turn to help thoose
                who cant help themselfs so that they may be a column for our
                Future.
              </p>
            </div>
          </div>

          <div class='col-lg-4 my-3 col-md-6'>
            <div class='become-partner box-shadow-comic'>
              <h3 class='ml-2 text-yellow'>
                Have an <span>Idea</span>?
              </h3>
              <p class='mt-3 text-white'>
                If you have your own idea for a better world, send us your
                suggestion and we will help you with the necessary
                infrastructure and the right people to implement it with you in
                the project team. We have all the necessary tools, the platform,
                the network, the advisors and the alumni to help you implement
                it correctly and quickly.
              </p>
            </div>
          </div>
        </div>

        <a href='mailto:enactus.utwente@gmail.com?subject=Join us Page'>
          <button class='my-5 submit-button ' type='submit' name='button'>
            Contact us!
          </button>
        </a>
      </div>
    </div>
  );
}

export default Join;
