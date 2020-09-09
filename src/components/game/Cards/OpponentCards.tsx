import React from 'react';

import './OpponentCards.scss';

type OpponentCardsProps = {
  count: number;
};

const OpponentCards = ({ count }: OpponentCardsProps) => (
  <div className="opponent-cards">
    <div>Cards</div>
    <div>{count}</div>
  </div>
);

export default OpponentCards;
