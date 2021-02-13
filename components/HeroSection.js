import styled from "styled-components";

const HeroSection = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

const StyledHeroSection = styled(HeroSection)`
  display: grid;
  /* position relative used to align hero image with container */
  position: relative;
  grid-template-columns: 5fr 7fr;
  min-height: 300px;
  width: 80%;
  margin: 3em auto 0 auto;
  padding: 10px;
  border-radius: 2rem;
  background-color: #ee6352;
  background-image: linear-gradient(-45deg, #ee6452, #d16e8d);
`;

export default StyledHeroSection;
