import React, { useState } from "react";
import styled from "styled-components";
import mainbg from "../assets/mainbg.png";
import Electronics from "./RentalItems";

const Onrent = () => {
  // console.log(Electronics);

  const [clicked, setClicked] = useState(false);

  return (
    <MainDiv>
      <HeadingComp>
        {!clicked ? (
          <>
            <SelectCategory>
              <span
                onClick={() => {
                  setClicked(true);
                }}
              >
                SelectCategory ▼
              </span>
            </SelectCategory>
          </>
        ) : null}

        {clicked ? (
          <>
            <>
              <SelectCategory>
                <span
                  onClick={() => {
                    setClicked(false);
                  }}
                >
                  SelectCategory ▼
                </span>
              </SelectCategory>
            </>
            <Links>
              <a href="/items-on-rent#electronics">Electronics</a>
              <a href="/items-on-rent#machines">Machines</a>
            </Links>
          </>
        ) : null}
      </HeadingComp>

      {/* FIRST */}
      <AllCategory>
        <a id="electronics">Electronics</a>
        <OverFlow>
          {Electronics.map((props) => {
            return (
              <>
                <Card>
                  <Img>
                    <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                  </Img>

                  <Pname>
                    <span>{props.pname}</span>
                  </Pname>

                  <Price>
                    <span>{props.price}</span>
                  </Price>

                  <Duration>
                    <span>{props.duration}</span>
                  </Duration>

                  <Deposit>
                    <span>{props.deposit}</span>
                  </Deposit>

                  <Tname>
                    <span>{props.tenantname}</span>
                  </Tname>
                </Card>
              </>
            );
          })}
        </OverFlow>
      </AllCategory>
    </MainDiv>
  );
};

export default Onrent;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: url(${mainbg});
  background-attachment: fixed;
`;

/******************************************************** */

/**heading component */
const HeadingComp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

/**heading */
const Links = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 132px;
  width: 190px;
  z-index: 1;

  a {
    background-color: white;
    border-radius: 4px;
    font-size: 22px;
    font-weight: 500;
    margin: 4px;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    color: #042a60;
  }
`;

/**select category */
const SelectCategory = styled.div`
  display: flex;
  margin: 0px 10px 10px 10px;
  -webkit-tap-highlight-color: transparent;

  span {
    border-radius: 4px;
    font-size: 22px;
    font-weight: 500;
    padding: 10px;
    cursor: pointer;

    box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);

    :hover {
      box-shadow: none;
      box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75) inset;
      -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75) inset;
      -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75) inset;
    }
  }
`;

/******************************************************** */

/**all category */
const AllCategory = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  width: 100%;

  margin: 0px 0px 30px 0px;

  /* width */
  ::-webkit-scrollbar {
    height: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    margin: -10px 10px 10px 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #042a60;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: black;
  }

  a {
    cursor: pointer;
    margin: 10px 10px 0px 10px;
    padding: 10px;
    font-size: 24px;
    font-weight: 500;
    color: black;
    width: fit-content;
    border-radius: 8px;

    position: relative;
    top: 0px;

    box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  }
`;

const OverFlow = styled.div`
  display: flex;
  margin: 10px 10px 10px 0px;
`;

/********************************************************************** */

/**cards */
const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 300px;
  margin: 10px -10px 10px 0px;
  margin: 10px;
  /* padding: 10px; */
  background-color: white;
  border-radius: 16px;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  span {
    margin: 4px 4px 4px 14px;
    padding: 4px;
    font-size: 18px;
    border-radius: 4px;
  }
  transition: 0.3s;

  :hover {
    transform: scale(1.02, 1.02);
    transition: 0.3s;
  }
`;

const Img = styled.div`
  display: flex;

  img {
    margin: 0px 0px 10px 0px;
    width: 300px;
    height: 280px;
    object-fit: cover;
    border-radius: 16px;
  }
`;

const Pname = styled.div`
  display: flex;

  span {
    color: black;
    font-size: 20px;
  }
`;

const Price = styled.div`
  display: flex;

  span {
    font-weight: 500;
    color: green;
  }
`;

const Duration = styled.div`
  display: flex;
`;

const Deposit = styled.div`
  display: flex;
`;

const Tname = styled.div`
  display: flex;

  span {
    font-weight: 500;
  }
`;
