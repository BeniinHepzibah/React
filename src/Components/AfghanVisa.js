import React, { useState } from 'react';
import bannerImage from './images/Banner-2.jpg';
import flag from './images/flag.png';
import './AfghanVisa.css';
import imgafghan1 from './images/afghan-icon1.png';
import imgafghan2 from './images/afghan-icon2.png';
import imgafghan3 from './images/afghan-icon3.png';
import imgafghan4 from './images/afghan-icon4.png';

const VisaItem = ({ imageSrc, processingTime, validity, price, serviceCharge, visaType }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="visa-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  
      <div className="visa-image">
        <img src={imageSrc} alt="" className="image img-responsive" title="" />
        <div className={`overlay ${hover ? 'visible' : ''}`}>
          <div className="text">
            <p>Processing Time: {processingTime}</p>
            <p>Validity: {validity}</p>
            <p>Adult / Child: {price}</p>
            <p>Service Charge: {serviceCharge}</p>
          </div>
          <div className="container-row text">
            <div className="list-buttons marginRight">
              <a
                href="https://cityonetours.com/booking/visa/workingvisiting-entry-visa"
                className="button-one button-blue"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="visa-details">
        <div className="visa-price">{price}</div>
        <div className="visa-type">{visaType}</div>
      </div>
    </div>
  );
};

const AfghanVisa = () => {
  return (
    <div className="container topSection">
      <div className="image-container">
        <img src={bannerImage} alt="" className="banner-image" />
      </div>
      <div className="wrap MarginTop paddingBottom">
      <h2 className="top-features-heading">Visa Process</h2>
        <div className="row paddingNone">
          <div className="step icon">
            <h3>Step 1</h3>
            <p className="paddingTop1">
              Select the Type of Visa you want to Apply.
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="step icon">
            <h3>Step 2</h3>
            <p className="paddingTop1">
              Upload the Required Documents for Review
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="step icon">
            <h3>Step 3</h3>
            <p className="paddingTop1">
              Pay the Service Fee & Visa Process Fee Online
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="step icon">
            <h3>Step 4</h3>
            <p className="paddingTop1">
              Visit our branch at an allotted Time with your Original Documents for Verification.
            </p>
          </div>
          <div className="step icon">
            <h3>Step 5</h3>
            <p className="paddingTop1">We will Submit the Application to the Afghan Embassy on Your Behalf & meanwhile</p>
          </div>
          <div className="step icon">
            <h3>Step 6</h3>
            <p className="paddingTop1">
              We will inform & you can come & collect your documents
              <br />
              <br />
            </p>
          </div>
        </div>
        {/* Rest of the code for Visa Process */}
      </div>

      <div className="row1 marginTop1">
        <h1 className="row marginBottom fontweightNone alignCenter visa-heading paddingBottom">
          Afghan Visa Type
        </h1>

        <div className="holidaylisting mobmarginBottom">
          <div className="row visa-row">
            <VisaItem
              imageSrc={flag}
              processingTime="5 Days"
              validity="30 Days"
              price="AED 375"
        
              serviceCharge="AED 300"
              visaType="Working/Visiting Entry Visa "
            />
            <VisaItem
              imageSrc={flag}
              processingTime="5 Days"
              validity="30 Days"
              price="AED 300"
              
              serviceCharge="AED 300"
              visaType="Single Entry Tourist Visa"
            />
            <VisaItem
              imageSrc={flag}
              processingTime="5 Days"
              validity="90 Days"
              price="AED 750"
              
              serviceCharge="AED 300"
              visaType="Multiple Business Entry Visa-90 days"
            />
            <VisaItem
              imageSrc={flag}
              processingTime="5 Days"
              validity="180 Days"
              price="AED 1500"
              serviceCharge="AED 300"
              visaType="Multiple Business Entry Visa-180 Days"
            />
            </div>
             <div className="row visa-row1">
            <VisaItem
              imageSrc={flag}
              processingTime="5 Days"
              validity="365 Days"
              price="AED 3000"
              serviceCharge="AED 300"
              visaType="Multiple Business Entry Visa-365 Days"
            />
            </div>
            {/* Repeat the above VisaItem component for other flag images with different data */}
          </div>
        </div>

        <div className="row  marginBottom">
  <div className="col-sm-5 mobmarginBottom">
    <img src={imgafghan1} alt="" className="images" />
    <div className="content">
      <h3 className="info">General Information</h3>
      <p>Name: Islamic Republic of Afghanistan. Natural resources: Natural gas, petroleum, coal, copper, chromite, talc, barites</p>
    </div>
  </div>
  <div className="col-sm-5">
    <img src={imgafghan3} alt="" className="images" />
    <div className="content">
      <h3 className="info">Population</h3>
      <p>According to the survey made by Central statistics office, Islamic Republic of Afghanistan, the total population of country</p>
    </div>
  </div>
</div>
<div className="row  marginBottom">
  <div className="col-sm-5 mobmarginBottom">
    <img src={imgafghan2} alt="" className="images" />
    <div className="content">
      <h3 className="info">Culture</h3>
      <p>Artistic activity in Afghanistan can be traced back as early as 18,000 BC. For centuries Afghanistan linked the civilizations</p>
    </div>
  </div>
  <div className="col-sm-5">
    <img src={imgafghan4} alt="" className="images" />
    <div className="content">
      <h3 className="info">People and Religions</h3>
      <p >For centuries, Afghanistan has been a mosaic of people with diverse cultures, religions and languages. Afghanistan’s</p>
    </div>
  </div>
  </div>

<div className="rows marginBottom">
        <div className="col-sm-12">
          <div className="faq-container">
          <h1 className="row marginBottom fontweightNone alignCenter visa-heading paddingBottom">
          Frequently Asked Questions
        </h1>
            <div className="col-sm-6 paddingInBox">
              <div className="faq-item">
                <h4>How do I get an Afghanistan visa from UAE?</h4>
                <ul>
                  <li>An Applicant can visit our website (www.cityonetours.com)</li>
                  <li>Apply online by uploading the required Documents & Pay the Service Fee Online.</li>
                  <li>We will verify the Documents first, fill-up all the Forms & Prepare all the required Documents on behalf of you.</li>
                  <li>We will then Invite you to come in-person to our office with your Original Documents & Pay the Visa Application Fees.</li>
                </ul>
              </div>
              <div className="faq-item">
                <h4>What are the documents required to apply for an Afghanistan visa?</h4>
                <ul>
                  <li>Visa Application Form</li>
                  <li>Passport (6 Months validity & must have a blank page)</li>
                  <li>2 Passport size photo (white background)</li>
                  <li>Copy of UAE Residence Permit, EID and Documents stating your current address in UAE. NOC from the Company.</li>
                  <li>Tourist Visas additional documents are required (Invitation letter from a sponsor/Tour company, confirmed flight and accommodation bookings, travel insurance, bank statement with sufficient funds covering the travel and stay in Afghanistan) Employment or business purposes must provide documentation from their present or prospective employer.</li>
                </ul>
              </div>
              <div className="faq-item">
                <h4>How long does it take to obtain an Afghanistan visa?</h4>
                <p>It will take up to 2 weeks to process</p>
              </div>
              <div className="faq-item">
                <h4>Do I need an Afghanistan visa?</h4>
                <p>Yes, if you are not an Afghan Citizen then you do need a visa.</p>
              </div>
              <div className="faq-item">
                <h4>What if I hold a valid visa in an expired Passport?</h4>
                <p>Need to renew the passport. 6 Months validity mandatory when traveling.</p>
              </div>
              <div className="faq-item">
                <h4>Can the visa be transferred from an old passport to a new passport?</h4>
                <p>No, just take the old passport with you along with the new passport.</p>
              </div>
            </div>
            
              <div className="faq-item ">
                <h4>Do I have to visit the Afghanistan Embassy to Apply for a visa?</h4>
                <p>No, You don't have to visit the Afghan Embassy. Instead, you can visit our website (www.cityonetours.com) & Apply online by uploading the required Documents & Pay the Service Fee Online.</p>
              </div>
           
          </div>
        </div>
      </div>

    
     
      <h1 className="row marginBottom fontweightNone alignCenter visa-heading paddingBottom">
          Afghanistan
        </h1>
    

      <div className="">
      
          <p className="font" >Afghanistan is a multiethnic nation situated in the heart of south-central Asia. It has a history of more than six thousand years, with many historical sights and attractions, among these are the more than two thousand years old famous Buddha Statues, the tomb of Hazrat-e Ali (the son in law of Prophet Mohammed PBUH and the fourth caliph of Islam) in Mazar-e Sharif, the beautiful city of Balkh (also known as the mother of all cities) and the lakes of Band-e Amir in Bamyan province.&nbsp;</p>
        
        
          <h3 className="heading"><b>Afghanistan's Relations with UAE</b></h3>
          <p className="font" >Afghanistan has always pursued a policy of neutrality and non-alignment in its foreign relations. The diplomatic relation between Afghanistan and the United Arab Emirates was established in the year 1973. Since then, Afghanistan and the UAE have had a cordial relationship.<br style={{ boxSizing: 'border-box' }} />During the Afghan Jihad against the Soviet invading army and their communist puppet regime in the 80s, the Government and people of the UAE under the wise leadership of H.H. Sheikh Zayed Bin Sultan Al Nahyan provided humanitarian as well as financial help to the Afghan people for their struggle for freedom. During this period, thousands of Afghans were given permission to enter the UAE and reside there. H.H. Sheikh Zayed provided land and opportunities for the many arriving Afghans.</p>
        
      </div>
    


      </div>
    
  
  );
};

export default AfghanVisa;
