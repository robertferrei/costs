 
 
 
 
import Formulario from "../../components/project/Formulario";
import { Container } from "./styles";

function NewProject() {
  return (
    <>
      <Container>
        <div>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os Serviços</p>
      <Formulario/>
      </div>
      
      </Container>
     
    </>
  );
}

export default NewProject;
