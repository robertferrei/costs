import Inpuut from "../../input";
import Select from "../../Select";
import SubmitButton from "../../submitButton";
import { Forme } from "./styles";

function Formulario({ btnText}) {
  return (
    <>
      <Forme>
        <Inpuut
          type="text"
          text="Nome do Projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
            <Inpuut
          type="number"
          text="Orçamento"
          name="budget"
          placeholder="Insira o Orçamento total"
       
        />
        
       <Select  name="category id" text="Selecione a categoria"/>

       <SubmitButton  text="criar projeto"/>
      </Forme>
    </>
  );
}

export default Formulario;
