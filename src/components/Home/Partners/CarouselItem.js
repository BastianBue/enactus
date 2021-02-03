import React from "react";

function CarouselItem(props) {
  const partner = props.partner;
  const classes = "mt-1 " + partner.node.subscriptionType;

  return (
    <div className='carousel-item '>
      <a href={partner.node.url} target='_blank' rel='noreferrer'>
        <img src={partner.node.image.file.url} alt='partner logo' />
        <h3 className='mt-4'>{partner.node.name}</h3>
        <h4 className={classes}>{partner.node.subscriptionType}</h4>
        <p className='mt-3'>
          {
            partner.node.childrenContentfulPartnerDescriptionTextNode[0]
              .description
          }
        </p>
        <p>Click for more information!</p>
      </a>
    </div>
  );
}

export default CarouselItem;
