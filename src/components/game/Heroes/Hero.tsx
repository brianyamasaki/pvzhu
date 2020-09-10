import React from 'react';

import './Hero.scss';

const defaultProps = {
  team: 'zombie',
};

type HeroProps = typeof defaultProps;

const Hero = ({ team }: HeroProps) => {
  const classes = ['hero'];
  if (team) {
    classes.push(team);
  }
  return <div className={classes.join(' ')} />;
};

export default Hero;
