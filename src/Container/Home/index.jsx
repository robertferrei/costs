import { Container } from "./styles"
import saving from "../../assets/savings.svg"
import Bottom from "../../components/button"
function Home(){
    return(
        <>
        <Container>
      <section>
        <h1>Bem vindo ao <span>Costs</span></h1>
        <p>comece a gerenciar os seus projetos agora mesmo!</p>
            <Bottom/>
        <img src={saving} alt="" />
      </section>
        </Container>
        </>
    )
}

export default Home