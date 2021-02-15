import styled from "styled-components";

export default styled.h1`
  font-family: "Shadows Into Light";
  font-size: ${(props) => props.theme.fs_h2};
  color: ${(props) => props.theme.gray};
  line-height: 1.3;
`;
