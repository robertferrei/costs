import { Forme } from "./styles";

function Formulario() {
    return (
      <>
        <Forme>
          <div>
            <input type="text" placeholder="insira o nome do projeto"></input>
          </div>
          <div>
            <input type="number" placeholder="insira o orçamento total"></input>
          </div>
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
  