import styled from "styled-components";

export default styled.h1`
  margin-bottom: 0.2em;
  font-size: ${(props) => props.theme.fs_h1};
  color: ${(props) => props.color};
  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.fs_h1_mobile};
  }
`;
