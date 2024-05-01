import React from 'react';

const config = ({ image, heading, content, inquiryLink }) => {
  return (
    <div className="box-container">
      <div className="box-left">
        <a href={image.link}>
          <img src={image.url} alt="Box Image" />
        </a>
      </div>
      <div className="box-right">
        <a href={heading.link}>
          <h2>{heading.text}</h2>
        </a>
        <p>{content}</p>
        <a href={inquiryLink} className="inquiry-button">Inquire</a>
      </div>
    </div>
  );
};

export default config;
