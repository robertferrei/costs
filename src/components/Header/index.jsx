import { Link, useLocation } from "react-router-dom";
import { Menu } from "./styles";
import Logo from "../../assets/costs_logo.png";
function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <Menu>
        <img src={Logo} alt="" />

        <li isActive={pathname === "/"}>
          <Link to="/">home</Link>
        </li>

        <li isActive={pathname.includes("projetos")}>
          <Link to="/projetos">Projetos</Link>
        </li>

        <li isActive={pathname.includes("newproject")}>
          <Link to="/newproject">Novo projeto</Link>
        </li>

        <li isActive={pathname.includes("contact")}>
          <Link to="/contact">contato</Link>
        </li>
      </Menu>
    </>
  );
}

export default Header;
