import { Container } from "./styles";

function SubmitButton({  text}) {
  return (
    <>
      <Container>
       <button>{text}</button>
      </Container>
    </>
  );
}

export default SubmitButton;
