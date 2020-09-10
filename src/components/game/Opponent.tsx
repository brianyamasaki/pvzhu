import React, { Fragment } from 'react';
import OpponentCards from './Cards/OpponentCards';
import Hero from './Heroes/Hero';
import Indicators from './Indicators/Indicators';

import './Opponent.scss';

const Opponent: React.FC = () => {
  return (
    <Fragment>
      <div className="pvz-opponent">
        <OpponentCards count={3} />
        <Hero team="zombie" />
        <Indicators />
      </div>
    </Fragment>
  );
};

export default Opponent;
