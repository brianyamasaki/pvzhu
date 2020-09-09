import React from 'react';

import './Lane.scss';

type LaneProps = {
  type: string;
};

const Lane = ({ type }: LaneProps) => {
  const classNames = ['lane'];
  if (type !== 'ground') {
    classNames.push(type);
  }
  return <div className={classNames.join(' ')} />;
};

export default Lane;
