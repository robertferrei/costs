
import { useNavigate } from "react-router-dom";
import Formulario from "../../components/project/Formulario";
import { Container } from "./styles";

function NewProject() {
    const history = useNavigate()

      function createPOst(project){
        // initialize  cost and services

        project.cost=0
        project.services=[]

        fetch (' http://localhost:5000/projects',{
          method: 'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body:JSON.stringify(project),
        }).then((resp) => resp.json())
          .then((data)=>{
            console.log(data)
            //redirect
            history('/projetos', {message:'projeto criado com sucessso"'})
          })       
        .catch(err => console.log(err))
      }
  return (
    <>
      <Container>
        <div>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os Serviços</p>
      <Formulario handleSubmit={createPOst} btnText="Criar projeto"/>
      </div>
      
      </Container>
     
    </>
  );
}

export default NewProject;
