import React, { Fragment } from 'react';
import Opponent from './Opponent';
import Player from './Player';
import Board from './Board';

import './Game.scss';

const Game: React.FC = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="game col l8 offset-l2 m10 offset-m1 s12">
          <Opponent />
          <Board />
          <Player />
        </div>
      </div>
    </Fragment>
  );
};

export default Game;
