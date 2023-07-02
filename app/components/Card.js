"use client";

import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  width: 300px;
  border-top: 0px;
  margin-top: 10em;
`;

const CardImg = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const ImgDiv = styled.section`
  display: flex;
  position: absolute;
  top: -100px;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  overflow: hidden;
`;
const EmptyDiv = styled.section`
  height: 70px;
  width: 100%;
  border-top: 5px solid #f97a00;
  border-bottom: 0px;
`;

const CardInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 4px -4px gray;
  gap: 0.5em;
  padding-bottom: 1.5em;
  height: 75px;
`;

const Title = styled.h2`
  font-weight: 400;
  color: #333333;
  text-align: center;
  font-size: 1.2rem;
`;
const Designation = styled.h4`
  color: #777;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
`;
const Responsibility = styled.h4`
  color: #777;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;
const Card = ({ detail }) => {
  return (
    <CardWrapper>
      <CardImg>
        <ImgDiv>
          <Image src={detail.Image} layout="fill" objectFit="cover" />
        </ImgDiv>
        <EmptyDiv></EmptyDiv>
      </CardImg>
      <CardInfo>
        <Title>{detail.Name}</Title>
        {detail.Responsibility && (
          <Responsibility>{detail.Responsibility}</Responsibility>
        )}
        <Designation>{detail.Designation}</Designation>
      </CardInfo>
    </CardWrapper>
  );
};

export default Card;