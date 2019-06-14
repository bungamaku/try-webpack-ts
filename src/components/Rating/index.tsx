import * as React from 'react';
import styled from 'styled-components';
import console = require('console');

const StarOn = require('../../images/star-on.png');
const StarOff = require('../../images/star-off.png');

const Star = styled.img`
  margin-top: 10px;
  margin-bottom: 0;
  margin-right: 5px;
`;

export interface Props {
  ratingPoint: number;
}

function getStar(ratingPoint: number) {
  let allStars: number = 5;
  let onStars: number = Math.floor(ratingPoint / 2);
  let result: any[] = [];

  while (allStars > 0) {
    if (onStars > 0) {
      result.push(<Star src={StarOn} alt='star-on' key={allStars} />);
      onStars--;
    } else {
      result.push(<Star src={StarOff} alt='star-off' key={allStars} />);
    }
    allStars--;
  }

  return result;
}

export default function Rating({ ratingPoint }: Props) {
  if (ratingPoint < 0 || ratingPoint > 10) {
    throw new Error('Rating point must be a positive number between 0-10.');
  }

  return (
    <div className='star'>
      <span>
        {getStar(ratingPoint)} ({ratingPoint}/10)
      </span>
    </div>
  );
}
