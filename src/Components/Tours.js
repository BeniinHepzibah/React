import React, { useState, useEffect } from 'react';
import bannerImage1 from './images/Banner-tour.png';
import './Tours.css';
import { Link } from 'react-router-dom';

import Box from './Box';

const Tours = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetch('your-api-url') 
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container topSection">
      <div className="image-container">
        <img src={bannerImage1} alt="" className="banner-image1" />
      </div>
      <div className="breadcrumb-section">
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link> <span>{'>'}</span>
           Tours we offer</li>
          </ul>
        </div>
      </div>
      <div className="banner-text">
        <h1>Discover Amazing Tours</h1>
        <p>In Dubai, AbuDhabi, Sharjah, RAK</p>
      </div>
      <div className="main-container">
        {data.map((item, index) => (
          <Box
            key={index}
            image={item.image}
            heading={item.heading}
            content={item.content}
            inquiryLink={item.inquiryLink}
          />
        ))}
      </div>
    </div>
  );
};
export default Tours;




