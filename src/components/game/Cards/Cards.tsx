import React from 'react';
import Card from './Card';

import './Cards.scss';

type CardsProps = {
  count: number;
};

class Cards extends React.Component<CardsProps> {
  renderCards() {
    const cards = [];
    const { count } = this.props;
    for (let i = 0; i < count; i += 1) {
      cards.push(<Card key={i} />);
    }
    return cards;
  }

  render() {
    return <div className="player-cards">{this.renderCards()}</div>;
  }
}

export default Cards;
