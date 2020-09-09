import React, { Fragment } from 'react';
import Lane from './Lane';

import './Board.scss';

const Player: React.FC = () => {
  return (
    <Fragment>
      <div className="game-board">
        <Lane type="heights" />
        <Lane type="ground" />
        <Lane type="ground" />
        <Lane type="ground" />
        <Lane type="water" />
      </div>
    </Fragment>
  );
};

export default Player;
