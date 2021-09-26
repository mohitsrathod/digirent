import React from "react";
import styled from "styled-components";
import mainbg from "../assets/mainbg.png";
import glasst from "../assets/glasst.png";

const Contact = () => {
  return (
    <MainDiv>
      <Info>
        <p>Contact us for any query </p>
        <p>Feedback / Suggetions </p>
      </Info>

      <AllInput>
        <Eachinput>
          <span>Your Name</span>
          <input placeholder="your name" />
        </Eachinput>

        <Eachinput>
          <span>Your Email</span>

          <input placeholder="your email" />
        </Eachinput>

        <Eachinput>
          <span>Mobile Number with contry code</span>
          <input placeholder="your number" />
        </Eachinput>

        <Eachinput>
          <span>Message</span>
          <input placeholder="write here" />
        </Eachinput>

        <Eachinput>
          <button>Submit</button>
        </Eachinput>
      </AllInput>
    </MainDiv>
  );
};

export default Contact;

const MainDiv = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${mainbg});
  background-attachment: fixed;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  height: fit-content;

  font-size: 22px;
  line-height: 0.05;

  padding: 10px;

  border-radius: 8px;
  box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  -webkit-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  -moz-box-shadow: 0px 0px 6px 2px rgba(179, 179, 179, 0.75);
  color: #042a60;
  font-weight: 500;
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
