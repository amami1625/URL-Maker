import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderElm = styled.header`
  text-align: center;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid gray;
`;
const Li = styled.li`
  display: inline-block;
  padding: 4px;
`;
const StyledLink = styled(Link)`
  font-weight: bold;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderElm>
      <h1>URLメーカー(β)</h1>
      <ul>
        <Li>
          <StyledLink to="/">前日</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/monthly">月次</StyledLink>
        </Li>
      </ul>
    </HeaderElm>
  );
};

export default Header;
