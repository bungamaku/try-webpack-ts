import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Rating from 'components/Rating';

const exampleImage = require('../../images/example.png');

const CardContainer = styled.div`
  width: 575px;
  height: 225px;
  display: flex;
  flex-direction: row;
  background: #181818;
  margin: 20px;
`;

const CoverImage = styled.img`
  height: 225px;
  margin-left: 0;
`;

const InfoContainer = styled.div`
  margin: 15px;
`;

const Title = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export default function MovieCard() {
  return (
    <CardContainer>
      <CoverImage src={exampleImage} alt='Example Image' />
      <InfoContainer>
        <Title to='/{id}'>Infinity War (2018)</Title>
        <Rating ratingPoint={8.5} />
      </InfoContainer>
    </CardContainer>
  );
}
