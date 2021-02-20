import styled from "styled-components";

const Header = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  padding: 0 200px;

  @media (max-width: 1200px) {
    display: none;
    padding: 0;
  }
`;

export default StyledHeader;
