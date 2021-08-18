import React from 'react';
import brandImg from '../../images/icon-brand-recognition.svg';
import detailedImg from '../../images/icon-detailed-records.svg';
import fullyImg from '../../images/icon-fully-customizable.svg';

export default function AdvStatistics() {
  return (
    <div className="adv-statistics">
      <article className="descr">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </article>
      <div className="adv-cards">
        <div className="card brand">
          <div className="card-icon">
            <img src={brandImg} alt="Brand recognition" />
          </div>
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className="card detailed">
          <div className="card-icon">
            <img src={detailedImg} alt="Detailed records" />
          </div>
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className="card fully">
          <div className="card-icon">
            <img src={fullyImg} alt="Fully customizable" />
          </div>
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </div>
  );
}
