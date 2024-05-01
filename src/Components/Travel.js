import React from 'react';

import bannerImage from './images/Banner-2.jpg';
import img1 from './images/ins-icon1.png';
import img2 from './images/ins-icon2.png';
import img3 from './images/ins-icon3.png';
import img4 from './images/ins-icon4.png';
import './Travel.css';
 


const Travel = () => {
  return (
    
    <div className="container topSection">
      <div className="image-container">
    <img src={bannerImage} alt="" className="banner-image"/>
  </div>
  <h2 className="top-features-heading">Top Features</h2>

      <div className="row paddingInBoxExtra">
        <div className="col-sm-1Forth icon mobmarginBottom">
          <div className="row mob20"><img src={img1} alt="" /></div>
          <div className="mob80"><h3 className="paddingTop alignCenter mobPaddingNone">Affordable worldwide coverage</h3></div>
        </div>
        <div className="col-sm-1Forth icon paddingRight  mobmarginBottom">
          <div className="row mob20"><img src={img2} alt="" /></div>
          <div className="mob80"><h3 className="paddingTop alignCenter mobPaddingNone">Professional 24x7 multilingual assistance / emergency services</h3></div>
        </div>
        <div className="col-sm-1Forth icon mobmarginBottom">
          <div className="row mob20"><img src={img3} alt="" /></div>
          <div className="mob80"><h3 className="paddingTop alignCenter mobPaddingNone">All plans are schengen visa compliant</h3></div>
        </div>
        <div className="col-sm-1Forth icon mobmarginBottom">
          <div className="row mob20"><img src={img4} alt="" /></div>
          <div className="mob80"><h3 className="paddingTop alignCenter mobPaddingNone">Unlimited trips under the annual multi trip policy</h3></div>
        </div>
      </div>

      <div className="row ">
        <div className="container-row col-sm-6 paddingInBox" style={{ backgroundColor: 'rgb(192, 221, 232, 0.8)', width: '600px' }}>
          <div className="col-sm-6">
            <h1 className="row alignCenter paddingBottom">Travel Insurance</h1>
            <h4 className="row alignCenter paddingBottom">While you travel, we cover you</h4>
          </div>
          <div className="col-sm-4">
            <div className="row paddingTop paddingBottom">
            <a href="https://www.orientonline.ae/PORTALS/GuestLogin.aspx?MasterId=feQnJ5WqcI0ZLouKOOQc0k9%2fL5FuxpdAwVXtn2uFv8ZRjoKokbH9rFr5LtZwcWYw" className="btn btn-primary">Apply Now</a>
           

            </div>
          </div>
        </div>
      </div>
      <h2 className="row fontweightNone paddingTop alignCenter h1">Outbound Travel Insurance</h2>
      <div className=" marginTop marginBottom featurPoints" style={{ backgroundColor: 'rgb(192, 221, 232, 0.8)', width: '100%' }}>
  <div className="col-sm-6 mobmarginBottom">
    <h3 className="row marginBottom fontweightNone paddingTop"><b>Features and Benefits</b></h3>
    <ul className="bullet-list">
      <li>Instant online Policy Issuance</li>
      <li>All plans are Schengen visa compliant</li>
      <li>Nil Excess under Emergency Medical (except Travel Senior Plus Plan)</li>
      <li>Professional 24x7 multilingual assistance / emergency services</li>
      <li>Affordable Worldwide Travel Cover</li>
      <li>Single trip and annual multi trip policies available</li>
      <li>Unlimited trips under the annual multi trip policy with a maximum of 92 days per trip</li>
      <li>Optional covers like - Winter Sports, Terrorism & Rental Car Excess are available on select plans by paying additional premium</li>
    </ul>
  </div>

  <div className="col-sm-6 mobmarginBottom">
    <h3 className="row marginBottom fontweightNone paddingTop"><b>Special Conditions</b></h3>
    <ul className="bullet-list">
      <li>All travelers must be UAE residents</li>
      <li>Insured Person’s travel begins and ends in UAE</li>
      <li>Premium is for each Insured Person excluding Travel Family Plus Plan</li>
      <li>50% discount for children under 18 years (except Travel Family Plus Plan)</li>
      <li>The Travel Family Plus Plan Limits/Premium are per Family</li>
      <li>Travel Family Plus Plan covers up to 2 Adults and 8 Children (below 18 years), and is extended to Single Parents also</li>
      <li>Travel Senior Plus is for Insured Person aged 71-79 years</li>
      <br></br>
      <br></br>
    </ul>
  </div>
</div>

      <div className="row paddingInBox marginTop featurPoints" style={{ background: 'none !important', width: '100%' }}>
        <h3 className="marginBottom fontweightNone paddingTop"><b>Major Exclusions</b></h3>
        <ul className="marginLeft paddingLeft font15">
          <li>Pre-Existing Ailments/Medical conditions, routine treatments, Pregnancy</li>
          <li>War, invasion, act of foreign enemy, hostilities (whether war is declared or not) civil war, civil commotion, rebellion, revolution, insurrection, military force, coup d’état, Terrorism, weapons of mass destruction, Political risk</li>
          <li>Any epidemic or pandemic</li>
          <li>You shall not be covered for any claim under this policy if the claim exposes us to any sanction, prohibition or restriction under the United Nations resolutions or trade or economic sanctions, laws or regulations of the European Union, United Kingdom or United States of America. It is our decision to not pay a claim under this policy if we believe paying the claim may breach the aforementioned</li>
        </ul>

        <p><b>Important Note-</b> The policy needs to be purchased before departure from UAE. The policy cannot be purchased if the person has already travelled out of UAE.</p>
      </div>
      <h2 className="row fontweightNone paddingTop alignCenter h1">Inbound Travel Insurance</h2>
      <div className=" marginTop marginBottom featurPoints" style={{ backgroundColor: 'rgb(192, 221, 232, 0.8)', width: '100%' }}>
  <div className="col-sm-6 mobmarginBottom">
    <h3 className="row marginBottom fontweightNone paddingTop"><b>Features and Benefits</b></h3>
    <ul className="bullet-list">
    <li>Affordable coverage</li>
    <li>Instant online policy issuance</li>
    <li>24x7 multilingual assistance / emergency services</li>
    <li>Single trip and multi trip policies available</li>
    <li>Unlimited trips under the multi trip policy with maximum of 14 days per trip</li>
    </ul>
    </div>
    
    <div className="col-sm-6 mobmarginBottom">
    <h3 className="row marginBottom fontweightNone paddingTop"><b>Special Conditions</b></h3>
    <ul className="bullet-list">
    <li>Any visitor or tourist coming into UAE</li>
    <li>Premium is for each Insured Person</li>
    <li>Senior Plans are for Insured Person aged 66-79 years</li>
    <br></br><br></br><br></br>
    <br></br>
    </ul>
    </div>    
    </div>
    <div className="row paddingInBox marginTop featurPoints" style={{ background: 'none !important', width: '100%' }}>
        <h3 className=" marginBottom fontweightNone paddingTop "><b>Major Exclusions</b></h3>
        <ul className="marginLeft paddingLeft font15">
          <li>Pre-Existing Ailments/Medical conditions, routine treatments, Pregnancy</li>
          <li>War, invasion, act of foreign enemy, hostilities (whether war is declared or not) civil war, civil commotion, rebellion, revolution, insurrection, military force, coup d’état, Terrorism, weapons of mass destruction, Political risk</li>
          <li>Any epidemic or pandemic</li>
          <li>You shall not be covered for any claim under this policy if the claim exposes us to any sanction, prohibition or restriction under the United Nations resolutions or trade or economic sanctions, laws or regulations of the European Union, United Kingdom or United States of America. It is our decision to not pay a claim under this policy if we believe paying the claim may breach the aforementioned</li>
        </ul>

        <p><b>Important Note-</b> The policy needs to be purchased before departure from UAE. The policy cannot be purchased if the person has already travelled out of UAE.</p>
      </div>
    

      
    </div>
  );
}
export default Travel;