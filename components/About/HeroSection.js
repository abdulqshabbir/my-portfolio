import styled from "styled-components";

const HeroSection = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

const StyledHeroSection = styled(HeroSection)`
  display: grid;
  flex: 1 0 auto;
  /* position relative used to align hero image with container */
  position: relative;
  grid-template-columns: 1fr;
  min-height: 300px;
  width: 80%;
  margin: 3em auto 0 auto;
  padding: 10px;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.green};
  background-image: linear-gradient(
    -45deg,
    ${(props) => props.theme.green},
    #388e3c
  );
`;

export default StyledHeroSection;
