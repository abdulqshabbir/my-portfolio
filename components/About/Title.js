import styled from "styled-components";

export default styled.h1`
  font-size: ${(props) => props.theme.fs_h1};
  color: black;
  margin-bottom: 0.5em;
  line-height: 1;
  margin: 20px;
  @media (max-width: 1200px) {
    padding: 0;
    margin: 10px 0;
    width: 100%;
    font-size: ${(props) => props.theme.fs_h1_mobile};
  }
`;
