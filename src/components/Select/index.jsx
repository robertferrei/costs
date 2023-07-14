import { Container } from "./styles";

function Select({  text, name, handleOnchange,options, value }) {
  return (
    <>
      <Container>
        <label htmlFor="name">{text}</label>
    <select name={name} id ={name}>
            <option >Selecione uma opção</option>

    </select>
      </Container>
    </>
  );
}

export default Select;
