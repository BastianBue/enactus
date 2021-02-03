import React from "react";

function CarouselSlide(props) {
  return (
    <div class={props.classes}>
      <div class='row d-flex justify-content-center'>{props.children}</div>
    </div>
  );
}

export default CarouselSlide;
