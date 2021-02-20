import styled from "styled-components";

const HamburgerHeader = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};

const StyledHamburgerHeader = styled(HamburgerHeader)`
  display: none;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 120px;
  }
`;

export default StyledHamburgerHeader;
