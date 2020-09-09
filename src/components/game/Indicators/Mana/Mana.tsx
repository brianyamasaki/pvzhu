import React from 'react';
import './Mana.scss';

type ManaProps = {
  amount: number;
};

const Mana = ({ amount }: ManaProps) => (
  <div className="mana">
    <div>Mana</div>
    <div>{amount}</div>
  </div>
);

export default Mana;
