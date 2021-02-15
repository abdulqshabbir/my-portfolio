import styled from "styled-components";

export default styled.h1`
  font-size: ${(props) => props.theme.fs_h1};
  color: ${(props) => props.theme.green};
  margin-bottom: 0.5em;
  line-height: 1;
  margin: 20px;
`;
