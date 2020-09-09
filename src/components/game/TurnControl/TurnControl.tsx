import React from 'react';

import './TurnControl.scss';

const TurnControl = () => (
  <div className="turn-control">
    <div className="phase">
      <span className="active">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
    </div>
    <button type="button">Done</button>
  </div>
);

export default TurnControl;
