import Inpuut from "../../input";
import { Forme } from "./styles";

function Formulario() {
  return (
    <>
      <Forme>
        <Inpuut
          type="text"
          text="nome do Projeto"
          name="name"
          placeholder="insira o nome do projeto"
        />
            <Inpuut
          type="number"
          text="Orçamento"
          name="budget"
          placeholder="insira o Orçamento total"
       
        />
        
        <div>
          <select name="category_id"></select>
          <option disabled>selecione a categoria</option>
        </div>

        <div>
          <input type="submit" value="criar projeto"></input>
        </div>
      </Forme>
    </>
  );
}

export default Formulario;
