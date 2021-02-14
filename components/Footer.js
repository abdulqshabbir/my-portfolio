import styled from "styled-components";

export default styled.section`
  min-height: 100px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  /* align-self and width ensure footer stretches horizontally on all screen sizes */
  align-self: center;
  width: 99vw;
  /* flex-shrink stick the footer to the bottom of the page */
  flex-shrink: 0;
`;
