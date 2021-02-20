import styled from "styled-components";

const Section = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

const StyledSection = styled(Section)`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-height: 300px;
  width: 80%;
  margin: 3em auto 0 auto;
  padding: 10px;

  @media (max-width: 1200px) {
    justify-content: center;
    width: 100%;
    min-height: 250px;
    padding: 0 20px;
    margin: 0;
  }
`;

export default StyledSection;
