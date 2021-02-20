import styled from "styled-components";

export default styled.h1`
  font-family: "Shadows Into Light";
  font-size: ${(props) => props.theme.fs_h2};
  color: ${(props) => props.color};
  line-height: 1.3;
  @media (max-width: 1200px) {
    padding: 0;
    margin: 10px 0;
    width: 100%;
    font-size: ${(props) => props.theme.fs_h2_mobile};
  }
`;
