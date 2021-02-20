import styled from "styled-components";

export default styled.img`
  grid-column: 1;
  grid-row: 1/1;
  width: 100%;
  height: auto;
  border-radius: 2em;
  @media (max-width: 1200px) {
    width: 70%;
    grid-column: 1/1;
    grid-row: 2/3;
    justify-self: center;
  }
`;
