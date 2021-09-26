import React from "react";
import styled from "styled-components";
import mainbg from "../assets/mainbg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MainDiv>
      <Links>
        <Each>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </Each>
        <Each>
          <Link to="refund-policy">Refund Policy</Link>
        </Each>

        <Each>
          <Link to="/about">About us</Link>
        </Each>

        <Each>
          <Link to="/contact">Contact us</Link>
        </Each>
        <Each>
          <Link to="/rent-on-digirent">Become a Tenant / Seller</Link>
        </Each>
      </Links>
      <CopyRight>©Digirent 2021 Designed and managed by students</CopyRight>
    </MainDiv>
  );
};

export default Footer;

/**main div */
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${mainbg});
  /* position: fixed; */
  bottom: 0;
  width: 100%;
`;

/**links */
const Links = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

/**eachlink */
const Each = styled.div`
  margin: 6px;
  padding: 8px;
  background-color: white;
  text-align: center;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  border-radius: 8px;
  cursor: pointer;
  color: black;

  :hover {
    color: blue;
    box-shadow: none;
    transition: 0.2s;
  }

  a {
    font-size: 16px;

    text-decoration: none;
    color: black;

    :hover {
      box-shadow: none;
      color: blue;
    }
  }
`;

/**copyright */
const CopyRight = styled.div`
  text-align: center;
  color: black;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 1px;
  margin: 10px;
  padding: 10px;
  border-bottom: 2px solid black;
`;
