import styled from "styled-components";

export default styled.h1`
  margin-bottom: 0.7em;
  font-family: "Shadows Into Light";
  font-size: ${(props) => props.theme.fs_h1};
  color: ${(props) => props.theme.gray};
  line-height: 1.3;
`;
