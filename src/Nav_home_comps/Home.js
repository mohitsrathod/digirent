import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainbg from "../assets/mainbg.png";

const Home = () => {
  return (
    <MainDiv>
      <Left>
        <span>Welcome to Digirent</span>
      </Left>

      <Right>
        <EachRight>
          <span>
            Here you will get all the Rental Products you want with affordable
            prices. No matter if you want it for hour, 2 hours, 2 days, a week,
            a month you just have to contact Tenant who provides particular
            product. Click here
          </span>
          <Link to="/items-on-rent">Items On Rent</Link>
        </EachRight>

        <EachRight>
          <span>
            If you want to buy old items with very good quality and affordable
            price, Click Here
          </span>
          <Link to="/items-on-sell">Items On Sell</Link>
        </EachRight>
      </Right>
    </MainDiv>
  );
};

export default Home;

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */

  -webkit-tap-highlight-color: transparent;

  background: url(${mainbg});
`;

/**left middle */
const Left = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 60px 0px 0px 10px;
  span {
    font-size: 56px;
    color: #042a60;

    @media screen and (max-width: 550px) {
      font-size: 40px;
    }
    @media screen and (max-width: 400px) {
      font-size: 30px;
    }
  }
`;

// const Middle = styled.div``;

/**right and eachright */
const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px 0px 0px 10px;
`;

const EachRight = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 70%; */
  :last-child {
    margin: 20px 0px 0px 0px;
  }

  span {
    font-size: 22px;
  }

  a {
    margin: 10px 10px 10px 0px;
    border-radius: 8px;
    border: 2px solid black;
    width: 140px;
    padding: 10px;
    text-decoration: none;
    user-select: none;
    color: black;
    font-size: 20px;
    background: transparent;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;

    :hover {
      border: 2px solid blue;
    }
  }
`;
