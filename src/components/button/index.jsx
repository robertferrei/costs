import { Link, useLocation } from "react-router-dom";
import { Container } from "./styles";

function Bottom() {
  const { pathname } = useLocation();

  return (
    <>

    <Container>
      <button>
        {" "}
        <li isActive={pathname.includes("newproject")}>
          <Link to="/newproject">Criar projeto</Link>
        </li>
      </button>
      </Container>
    </>
  );
}

export default Bottom;
