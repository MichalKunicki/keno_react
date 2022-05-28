import styled from "styled-components";
import { Buttons, Grid } from "./components";
import bg from "./assets/bg.jpg";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { maxError, success, betSizeError, choiceError, lucky, chosen } =
    useContext(AppContext);
  return (
    <AppCss style={{ backgroundImage: `url(${bg})` }}>
      <header>
        {maxError && (
          <div className="error">You can choose up to 5 numbers!</div>
        )}
        {betSizeError && <div className="error">Minimum betsize is 1!</div>}
        {choiceError && (
          <div className="error">Choose at least one number!</div>
        )}
        {success && (
          <div className="success">Your bet was placed! GOOD LUCK!</div>
        )}
        {lucky && (
          <div className="success">
            Your lucky numbers: {chosen.join(", ")}!
          </div>
        )}
        <h1>KENO</h1>
      </header>
      <Buttons />
      <div className="wrapper">
        <Grid />
      </div>
    </AppCss>
  );
}
const AppCss = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 720px;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;

  .error {
    position: absolute;
    font-size: 18px;
    color: #d20202;
  }
  .success {
    position: absolute;
    font-size: 18px;
    color: #1bab05;
  }
  h1 {
    font-family: "Luckiest Guy", cursive;
    font-size: 110px;
  }
  header {
    font-size: 40px;
    line-height: 0px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default App;
