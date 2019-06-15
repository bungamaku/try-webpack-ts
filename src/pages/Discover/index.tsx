import * as React from 'react';
import styled from 'styled-components';
import MovieCard from 'components/MovieCard';

const Popular = styled.div`
  font-weight: 500;
  font-size: 26px;
  line-height: 34px;
  margin-left: 120px;
  margin-top: 60px;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 100px;
  margin-top: 20px;
`;

export default function Page() {
  let cards: any[] = [];

  for (let i = 0; i < 20; i++) {
    cards.push(<MovieCard key={i} />);
  }

  return (
    <div>
      <Popular>Most Popular</Popular>
      <Cards>{cards}</Cards>
    </div>
  );
}
