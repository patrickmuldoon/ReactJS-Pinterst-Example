import React from 'react';

const PinterestCard = ({
  card: { title, subtitle, pins, mainImg, subImg1, subImg2 }
}) => (
  <div className="card">
    <div className="summary">
      <h3 className="title"><strong>{title}</strong></h3>
      <div className="sub-title">{subtitle}</div>
      <div className="pin-count">
        <strong>{pins}</strong> Pins
      </div>
    </div>
    <div className="images">
      <img className="main" alt={title} src={mainImg} />
      <img className="sub1" alt="preview 1" src={subImg1} />
      <img className="sub2" alt="preview 2" src={subImg2} />
    </div>
    <button className="follow-btn">Follow</button>
  </div>
);


export default PinterestCard;
