import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderElm = styled.header``;
const Ul = styled.ul``;
const Li = styled.li``;

const Header = () => {
  return (
    <HeaderElm>
      <h1>URLメーカー(β)</h1>
      <Ul>
        <Li><Link to="/">当日</Link></Li>
        <Li><Link to="/monthly">月次</Link></Li>
      </Ul>
    </HeaderElm>
  );
};

export default Header;
