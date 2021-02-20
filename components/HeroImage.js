import styled from "styled-components";

export default styled.img`
  grid-column: 1/2;
  grid-row: 1/1;
  position: absolute;
  height: 100%;
  border-radius: 2em;
  @media (max-width: 1200px) {
    grid-column: 1/1;
    grid-row: 2/3;
    justify-self: center;
  }
`;
