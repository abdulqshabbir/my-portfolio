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
  line-height: 1.2;
  min-height: 100vh;
  width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1200px) {
    width: 100%;
    line-height: 1.5;
  }
`;

export default StyledContainer;
