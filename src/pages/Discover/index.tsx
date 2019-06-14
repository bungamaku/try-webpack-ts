import * as React from 'react';
import styled from 'styled-components';
import MovieCard from 'components/MovieCard';

const Popular = styled.div`
  font-weight: 500;
  font-size: 26px;
  line-height: 34px;
  margin-left: 120px;
  margin-top: 120px;
`;

export default function Page() {
  return (
    <div>
      <Popular>Most Popular</Popular>
      <MovieCard />
    </div>
  );
}
