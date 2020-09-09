import React from 'react';
import HealthMeter from './HealthMeter';
import Mana from './Mana/Mana';

import './Indicators.scss';

const Indicators = () => (
  <div className="indicators valign-wrapper">
    <HealthMeter />
    <Mana amount={3} />
  </div>
);

export default Indicators;
