import styled from "styled-components";

const Section = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100vh;
  padding: 30px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: 500px;
  }
`;

export default StyledSection;
