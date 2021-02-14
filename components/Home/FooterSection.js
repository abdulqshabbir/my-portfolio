import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 4em;
  margin: 0;
  background-color: ${(props) => props.color};
  width: 100%;
  min-height: ${(props) => props.minHeight};
`;
