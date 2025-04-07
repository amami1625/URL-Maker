import Header from "./Header";
import { Outlet } from "react-router-dom";
import Container from "../common/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
