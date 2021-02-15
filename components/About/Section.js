import styled from "styled-components";

const Section = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 600px;
  padding: 30px;
`;

export default StyledSection;
