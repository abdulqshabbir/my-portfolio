import styled from "styled-components";

const FlexWrapper = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const StyledFlexWrapper = styled(FlexWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

export default StyledFlexWrapper;
