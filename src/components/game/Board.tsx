import React, { Fragment } from 'react';
import Lane from './Lane';

import './Board.scss';

const Player: React.FC = () => {
  return (
    <Fragment>
      <div className="game-board">
        <Lane />
        <Lane />
        <Lane />
        <Lane />
        <Lane />
      </div>
    </Fragment>
  );
};

export default Player;
