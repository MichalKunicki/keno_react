import { useState, createContext, useRef } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  //Chosen numbers array.
  const [chosen, setChosen] = useState([]);

  //Error message when array reaches 10 choices.
  const [maxError, setMaxError] = useState(false);

  const [success, setSuccess] = useState(false);

  const [betsize, setBetsize] = useState("50");

  const [lucky, setLucky] = useState(false);

  const gridRef = useRef();

  const handleBetsize = (e) => {
    setBetsize(e.target.value);
  };
  const handleChange = (e) => {
    setBetsize(e.target.value);
  };

  //Handle all choosing logic.
  const handleChoice = (e) => {
    //Remove choice if already in array
    if (chosen.includes(e.target.innerText)) {
      setChosen(
        chosen.filter((number) => {
          return number !== e.target.innerText;
        })
      );
      e.target.id = "";
      setMaxError(false);
    } else {
      if (chosen.length < 5) {
        setChosen((oldArray) => oldArray.concat(e.target.innerText));
        e.target.id = "chosen";
        setMaxError(false);
      } else {
        setMaxError(true);
        setTimeout(() => {
          setMaxError(false);
        }, 3000);
      }
    }
  };

  const luckyPick = () => {
    let children = gridRef.current.children;
    let array = [];
    //Get 5 random numbers from the pool of 80.
    while (array.length < 5) {
      let random = Math.floor(Math.random() * 80) + 1;
      if (array.indexOf(random) === -1) array.push(random);
    }

    // I couldn't figure out why the grid fields are not changing their background color based on this loop. This logic seems to work in handlePlay().
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      array.includes(child.innerText) ? (child.id = "chosen") : (child.id = "");
    }
    setChosen(array);
    setLucky(true);
    setTimeout(() => {
      setLucky(false);
      setChosen([]);
    }, 3000);
  };

  const [betSizeError, setBetSizeError] = useState(false);
  const [choiceError, setChoiceError] = useState(false);

  const handlePlay = () => {
    let children = gridRef.current.children;

    if (betsize > 0 && chosen.length > 0) {
      setChosen([]);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3500);
      // Loop over all grid cells and remove background color.
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.id === "chosen") {
          child.id = "";
        }
      }
    } else if (betsize == 0) {
      setBetSizeError(true);
      setTimeout(() => {
        setBetSizeError(false);
      }, 3500);
    } else if (chosen.length === 0) {
      setChoiceError(true);
      setTimeout(() => {
        setChoiceError(false);
      }, 3500);
    }
  };

  const value = {
    chosen,
    setChosen,
    maxError,
    setMaxError,
    success,
    setSuccess,
    betsize,
    setBetsize,
    handleBetsize,
    handleChange,
    handleChoice,
    handlePlay,
    luckyPick,
    betSizeError,
    choiceError,
    gridRef,
    lucky,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
