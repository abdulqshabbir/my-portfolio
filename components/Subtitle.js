import styled from "styled-components";

export default styled.h1`
  margin-bottom: 0.7em;
  font-family: marydale, sans-serif;
  font-size: ${(props) => props.theme.fs_h2};
  color: ${(props) => props.color};
  line-height: 1.3;
`;
