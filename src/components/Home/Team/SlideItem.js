import React from "react";

function SlideItem(props) {
  const member = props.member;

  if (member !== undefined) {
    return (
      <div class='col-lg-4 col-md-9'>
        <a class='gallery-image'>
          <div class='project-card'>
            <div class='card-header'>
              <img src={member.picture.file.url} alt='' />
            </div>
            <div class='card-footer'>
              <h4>
                {member.name}
                <br />
                {member.lastName}
              </h4>
            </div>
          </div>
        </a>
      </div>
    );
  } else if (member === undefined) {
    return (
      <div class='col-lg-4 col-md-9 '>
        <a href='mailto:enactus.utwente@gmail.com'>
          <div class='project-card this-could-be-you'>
            <div class='card-footer '>
              <h4>This could be you!</h4>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default SlideItem;
