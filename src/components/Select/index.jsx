import { Container } from "./styles";

function Select({ text, name, handleOnchange, options, value }) {
  return (
    <>
      <Container>
        <label htmlFor="name">{text}</label>
        <select
          name={name}
          id={name}
          onChange={handleOnchange}
         
        >
          <option>Selecione uma opção</option>

          {options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </Container>
    </>
  );
}

export default Select;
