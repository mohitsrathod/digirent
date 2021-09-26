import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <MainDiv>
      <span>
        We are group of student making this awsome platform for you...
      </span>
    </MainDiv>
  );
};

export default About;

const MainDiv = styled.div`
  display: flex;
  span {
    font-size: 22px;
    color: #062a60;
    margin: 10px;
  }
`;
