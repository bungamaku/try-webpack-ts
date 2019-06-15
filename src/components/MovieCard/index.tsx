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

const Desc = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-top: 5px;
`;

export interface Props {
  cover: string;
  title: string;
  rating: number;
  desc: string;
}

export default function MovieCard() {
  return (
    <CardContainer>
      <CoverImage src={exampleImage} alt='{title}' />
      <InfoContainer>
        <Title to='/{id}'>Infinity War (2018)</Title>
        <Rating ratingPoint={8.5} />
        <Desc>
          As the Avengers and their allies have continued to protect the world
          from threats too large for any one hero to handle, a new danger has
          emerged from the cosmic shadows: Thanos. A despot of intergalactic
          infamy, his goal is to collect all six Infinity Stones, artifacts of
          unimaginable power, and use them to inflict his twisted will on all of
          reality. Everything the Avengers have fought for has led up to this
          moment - the fate of Earth and existence itself has...
        </Desc>
      </InfoContainer>
    </CardContainer>
  );
}
