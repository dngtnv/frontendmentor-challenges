import React from 'react';
import './index.scss';
import Shorten from './Shorten';
import AdvStatistics from './AdvStatistics';

function index() {
  return (
    <section className="adv">
      <div className="adv-section container container-pd-adv">
        <Shorten />
        <AdvStatistics />
      </div>
    </section>
  );
}

export default index;
