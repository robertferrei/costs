import { Container } from "./styles";

function Inpuut({type, text, name, placeholder, handleOnchange, value}) {
  return (
    
      <Container>

      
       <label htmlFor="name">{text}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={ placeholder}
          onChange={handleOnchange}
          value={value}
        />
       
      </Container>
   
  );
}

export default Inpuut;
