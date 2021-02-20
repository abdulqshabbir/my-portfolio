import styled from "styled-components";

export default styled.h1`
  grid-column: 2/3;
  align-self: center;
  text-align: center;
  color: black;
  padding: 20px;
  @media (max-width: 1200px) {
    width: 100%;
    font-size: ${(props) => props.theme.fs_h1_mobile};
  }
`;
