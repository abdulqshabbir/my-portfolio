import styled from "styled-components";

const MainContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledContainer = styled(MainContainer)`
  padding: 0;
  margin: 0;
  background-color: white;
  color: black;
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* space-between ensures that footer is pushed to the bottom of page */
  justify-content: space-between;
  position: relative;
`;

export default StyledContainer;
