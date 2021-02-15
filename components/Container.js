import styled from "styled-components";

const Container = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0 auto;
  background-color: white;
  color: black;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: calc(1rem * 1.7);
  min-height: 100vh;
  width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default StyledContainer;
