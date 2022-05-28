import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Grid = () => {
  const { handleChoice, gridRef } = useContext(AppContext);

  const cells = 80;
  return (
    // Render 80 numbered cells for the grid.
    <GridCss ref={gridRef}>
      {[...Array(cells)].map((cell, i) => {
        return (
          <div onClick={handleChoice} className="cell" key={i}>
            {i + 1}
          </div>
        );
      })}
    </GridCss>
  );
};
const GridCss = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  min-height: 500px;
  width: 75vw;
  background-color: rgba(10, 10, 3, 0.7);
  border: 1px solid white;
  border-radius: 20px;
  .cell {
    font-size: 24px;
    border-radius: 20px;
    background-color: rgba(94, 91, 97, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cell:hover {
    background-color: #a58d00;
    cursor: pointer;
  }
  ${"" /* This ID is changed in the handleChoice() function.  */}
  #chosen {
    background-color: #d20202;
  }

  @media screen and (max-width: 1050px) {
    width: 90vw;
  }
`;

export default Grid;
