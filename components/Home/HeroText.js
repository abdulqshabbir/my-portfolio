import styled from "styled-components";

export default styled.h1`
  grid-column: 2/3;
  align-self: center;
  color: white;
  font-size: ${(props) => props.theme.fs_h1};
  line-height: calc(3.257rem * 1.1);
`;
