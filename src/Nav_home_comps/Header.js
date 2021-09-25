import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import mainbg from "../assets/mainbg.png";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <MainDiv>
      <HomeLink>
        <Link to="/">Digirent</Link>
      </HomeLink>

      <AllLinks>
        <EachLink>
          <Link to="/items-on-rent">Items On Rent</Link>
        </EachLink>
        <EachLink>
          <Link to="/items-on-sell">Items On Sell</Link>
        </EachLink>

        <EachLink>
          <Link to="/rent-on-digirent">Become Tenant/Seller</Link>
        </EachLink>

        <EachLink>
          <Link to="/about">About us</Link>
        </EachLink>

        <EachLink>
          <Link to="/contact">Contact us</Link>
        </EachLink>
      </AllLinks>

      <DivOne>
        {clicked ? (
          <>
            <AllLinkss>
              <Close
                onClick={() => {
                  setClicked(false);
                }}
              >
                <span>CLOSE</span>
              </Close>
              <EachLinks>
                <Link to="/items-on-rent">Items On Rent</Link>
              </EachLinks>
              <EachLinks>
                <Link to="/items-on-sell">Items On Sell</Link>
              </EachLinks>

              <EachLinks>
                <Link to="/rent-on-digirent">Become Tenant/Seller</Link>
              </EachLinks>

              <EachLinks>
                <Link to="/about">About us</Link>
              </EachLinks>

              <EachLinks>
                <Link to="/contact">Contact us</Link>
              </EachLinks>
            </AllLinkss>
          </>
        ) : null}

        {clicked ? null : (
          <>
            <Open
              onClick={() => {
                setClicked(true);
              }}
            >
              <span>MENU</span>
            </Open>
          </>
        )}
      </DivOne>
    </MainDiv>
  );
};

export default Header;

/**open close */

const DivOne = styled.div`
  z-index: 1;
  @media screen and (min-width: 1030px) {
    display: none;
  }

  -webkit-tap-highlight-color: transparent;
`;

const Close = styled.div`
  text-align: right;
  /* width: -40px; */
  margin: 12px;

  span {
    padding: 10px;
    font-size: 22px;

    text-decoration: none;
    color: #042a60;
    font-weight: 500;
    /* background: white; */

    :hover {
      box-shadow: none;
      transform: scale(1.1, 1.1);
      cursor: pointer;
      color: blue;
    }
  }
`;
const Open = styled(Close)`
  span {
    background: none;
    cursor: pointer;
  }
  :hover {
    box-shadow: none;
    transform: scale(1.1, 1.1);
  }
`;

const AllLinkss = styled.div`
  display: flex;
  flex-direction: column;
  margin: 316px 16px 16px 16px;
  background: url(${mainbg});

  /* border: 1px solid black; */

  justify-content: center;

  border-radius: 4px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
`;

const EachLinks = styled.div`
  margin: 6px;
  padding: 8px;
  /* height: 100%; */
  max-width: 160px;
  background-color: white;
  text-align: center;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  border-radius: 8px;

  :hover {
    box-shadow: none;
    transition: 0.2s;
  }

  a {
    font-size: 22px;

    text-decoration: none;
    color: #042a60;
    font-weight: 500;

    :hover {
      box-shadow: none;
      transform: scale(1.1, 1.1);
    }
  }
`;

/**all links */
const AllLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /**REMOVE EACH CHILDS */
`;

/* main div*/
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: center;
  user-select: none;

  background: url(${mainbg});
`;

const HomeLink = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  -webkit-tap-highlight-color: transparent;
  align-items: center;

  a {
    background-color: white;
    margin: 10px;
    padding: 10px;
    font-size: 22px;

    text-decoration: none;
    color: #042a60;
    font-weight: 500;
    background: transparent;

    :hover {
      box-shadow: none;
      transform: scale(1.1, 1.1);
    }
  }
`;

const EachLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1030px) {
    display: none;
  }

  a {
    background-color: white;
    margin: 10px;
    padding: 10px;
    font-size: 22px;
    background: transparent;

    text-decoration: none;
    color: #042a60;
    font-weight: 500;

    :hover {
      box-shadow: none;
      transform: scale(1.1, 1.1);
    }
  }
`;
