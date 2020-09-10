import React, { Fragment } from 'react';
import TurnControl from './TurnControl/TurnControl';
import Hero from './Heroes/Hero';
import Indicators from './Indicators/Indicators';
import Cards from './Cards/Cards';

import './Player.scss';

const Player: React.FC = () => {
  return (
    <Fragment>
      <div className="pvz-player">
        <div className="controls">
          <Indicators />
          <Hero team="plant" />
          <TurnControl />
        </div>
        <Cards count={10} />
      </div>
    </Fragment>
  );
};

export default Player;
