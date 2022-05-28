import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Buttons = () => {
  const { luckyPick, betsize, handleBetsize, handleChange, handlePlay } =
    useContext(AppContext);

  return (
    <ButtonsCss>
      <button className="lucky" onClick={luckyPick}>
        LUCKY PICK
      </button>
      <button value="100" onClick={handleBetsize}>
        BET 100
      </button>
      <button value="500" onClick={handleBetsize}>
        BET 500
      </button>
      <button value="1000" onClick={handleBetsize}>
        BET 1000
      </button>
      <div className="input">
        <input type="number" value={betsize} onChange={handleChange}></input>
      </div>
      <button onClick={handlePlay} className="play">
        PLAY
      </button>
      <div></div>
    </ButtonsCss>
  );
};
const ButtonsCss = styled.div`
  width: 60vw;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(10, 10, 3, 0.6);
  border: 1px solid white;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 20px;

  button,
  .input {
    font-family: "Concert One", cursive;
    font-size: 22px;
    border-radius: 30px;
    color: white;
    border: 1px solid white;
    background-color: rgba(10, 10, 3, 0.9);
    margin: 8px;
    height: 70px;
    width: 130px;
  }
  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  input {
    color: white;
    width: 60%;
    height: 40px;
    font-size: 20px;
    background-color: rgba(10, 10, 3, 0.9);
  }
  .lucky {
    background-color: #1bab05;
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .play {
    background-color: #a58d00;
  }
  @media screen and (max-width: 1050px) {
    width: 80vw;
  }
`;

export default Buttons;
