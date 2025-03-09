import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderElm = styled.header`
  text-align: center;
  padding: 8px 0;
  margin-bottom: 16px;
  background-color: oklch(0.746 0.16 232.661);
`;
const Ul = styled.ul`;
`;
const Li = styled.li`
  display: inline-block;
  padding: 4px;
  `;

const Header = () => {
  return (
    <HeaderElm>
      <h1>URLメーカー(β)</h1>
      <Ul>
        <Li>
          <Link to="/">前日</Link>
        </Li>
        <Li>
          <Link to="/monthly">月次</Link>
        </Li>
      </Ul>
    </HeaderElm>
  );
};

export default Header;
