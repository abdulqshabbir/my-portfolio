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
`;

export default StyledHeader;
