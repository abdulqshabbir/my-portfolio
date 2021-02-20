import styled from "styled-components";

const HeroSection = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

const StyledHeroSection = styled(HeroSection)`
  display: grid;
  grid-template-columns: 4fr 7fr;
  grid-template-rows: 1fr;
  min-height: 300px;
  max-height: 350px;
  width: 100%;
  margin: 3em auto 0 auto;
  padding: 10px;
  background-color: #ee6352;
  background-image: linear-gradient(-45deg, #ee6452, #d16e8d);
  text-align: center;

  @media (max-width: 1200px) {
    width: 100%;
    min-height: 200px;
    max-height: 600px;
    border-radius: 0rem;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
  }
`;

export default StyledHeroSection;
