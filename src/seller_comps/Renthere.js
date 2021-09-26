import React from "react";
import styled from "styled-components";
import mainbg from "../assets/mainbg.png";
import glasst from "../assets/glasst.png";
import rentonline from "../assets/rentonline.png";

const Renthere = () => {
  return (
    <MainDiv>
      <Info>
        <img src={rentonline} alt="img" />
        <span>
          Welcome Tenant! we know you are looking for earning by renting your
          products online. we are here for you. Here Tenants who want to rent
          their producs online, can make their tenant profile here. This profile
          will be shown to users as per your rank. Your rank depends on your
          ratings given by customers. So make profile, give proper information
          and start earning.
        </span>
      </Info>

      <AllInput>
        <Eachinput>
          <span>For company use</span>
          <input placeholder="enter your name" />
        </Eachinput>

        <Eachinput>
          <span>for company use</span>

          <input placeholder="your mobile number" />
        </Eachinput>

        <Eachinput>
          <span>for company use</span>
          <input placeholder="your email address" />
        </Eachinput>

        <Eachinput>
          <span>upload your photo for your identity</span>
          <input placeholder="" />
        </Eachinput>

        <Eachinput>
          <span>Number to be shared with customer</span>
          <input placeholder="enter mobile number" />
        </Eachinput>

        <Eachinput>
          <span>name of your shop</span>

          <input placeholder="write here" />
        </Eachinput>

        <Eachinput>
          <span>select category</span>

          <input placeholder="" />
        </Eachinput>

        <Eachinput>
          <span>Add product name</span>

          <input placeholder="write here" />
        </Eachinput>

        <Eachinput>
          <span>write product price</span>

          <input placeholder="write here" />
        </Eachinput>

        <Eachinput>
          <span>Duration</span>

          <input placeholder="write here" />
        </Eachinput>

        <Eachinput>
          <span>Fix deposit</span>

          <input placeholder="write here" />
        </Eachinput>

        <Eachinput>
          <span>Add product images up to 10</span>

          <input placeholder="" />
        </Eachinput>

        <Eachinput>
          <button>Submit</button>
        </Eachinput>
      </AllInput>
    </MainDiv>
  );
};

export default Renthere;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  background: url(${mainbg});
  background-attachment: fixed;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 60%;

  height: fit-content;

  padding: 10px;
  margin: 100px 10px 10px 10px;
  @media screen and (max-width: 700px) {
    margin: 10px;
  }

  border-radius: 8px;
  box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);

  img {
    width: 100%;
    border-radius: 16px;
    margin: 0px 0px 10px 0px;
  }

  span {
    font-size: 20px;
    color: #062a60;
  }
`;

/**all input container */
const AllInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin: 20px;
  padding: 10px;
  justify-content: center;
  align-items: left;

  width: 400px;
  @media screen and (max-width: 440px) {
    width: 300px;
  }

  background: url(${mainbg});

  background-attachment: fixed;

  /* border: 2px solid black; */
  border-radius: 8px;
  box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
`;

/**each input */
const Eachinput = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding: 6px;
    font-size: 22px;
    border-radius: 8px;
    width: fit-content;
    color: #042a60;
    font-weight: 500;
  }

  input,
  button {
    margin: 8px;
    padding: 6px;
    font-size: 20px;
    outline: none;
    border: none;
    text-decoration: none;
    letter-spacing: 1px;
    color: black;
    background: transparent;

    border-radius: 8px;
    box-shadow: 0px 0px 4px 1px rgba(179, 179, 179, 0.75) inset;
    -webkit-box-shadow: 0px 0px 4px 1px rgba(179, 179, 179, 0.75) inset;
    -moz-box-shadow: 0px 0px 4px 1px rgba(179, 179, 179, 0.75) inset;

    ::placeholder {
      color: rgb(65, 138, 255);
    }
  }

  button {
    box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
    cursor: pointer;
    font-weight: 800;

    :hover {
      background-image: url(${glasst});
      background-position: 10px;
      box-shadow: none;
    }
  }
`;
