import styled from "styled-components";

const AboutSection = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

const StyledAboutSection = styled(AboutSection)`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 80%;
  margin: 3em auto 0 auto;
  padding: 10px;
`;

export default StyledAboutSection;
