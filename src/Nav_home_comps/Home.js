import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainbg from "../assets/mainbg.png";
import glasst from "../assets/glasst.png";
import rentonline from "../assets/rentonline.png";
import homeimg from "../assets/homeimg.png";

const Home = () => {
  return (
    <MainDiv>
      <FullLeft>
        <Left>
          <span>Welcome to Digirent</span>
          <Link to="/items-on-rent">Items On Rent</Link>
          <Link to="/items-on-sell">Items On Sell</Link>
        </Left>
        <Image>
          <img src={homeimg} alt="img" />
        </Image>
      </FullLeft>

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
  justify-content: center;

  -webkit-tap-highlight-color: transparent;

  background: url(${mainbg});
  background-attachment: fixed;
`;

/**image */
const Image = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

/**full left */
const FullLeft = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: transparent;
  box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);

  span {
    margin: 0px 0px 0px 10px;

    font-size: 56px;
    color: #042a60;

    @media screen and (max-width: 550px) {
      font-size: 40px;
    }
    @media screen and (max-width: 400px) {
      font-size: 30px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 700px;
    max-height: 600px;
    border-radius: 10px;
  }

  a {
    margin: 10px 10px 10px 0px;
    border-radius: 8px;
    width: 140px;
    padding: 10px;
    text-decoration: none;
    user-select: none;
    color: black;
    font-size: 20px;
    background: transparent;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;

    box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);

    :hover {
      background-image: url(${glasst});
      background-position: 10px;
      box-shadow: none;
    }
  }
`;

/**left middle */
const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  margin: 10px;
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
    width: 140px;
    padding: 10px;
    text-decoration: none;
    user-select: none;
    color: black;
    font-size: 20px;
    background: transparent;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;

    box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);

    :hover {
      background-image: url(${glasst});
      background-position: 10px;
      box-shadow: none;
    }
  }
`;
