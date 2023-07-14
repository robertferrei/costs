 
import { AiFillFacebook, AiFillLinkedin,AiFillInstagram,AiOutlineCopyrightCircle} from "react-icons/ai";
import { Footeer } from "./styles";

function Footer(){
    return(
        <>
        <Footeer>
            <ul>
                <li><AiFillFacebook/></li>
                <li><AiFillInstagram/></li>
                <li><AiFillLinkedin/></li>
            </ul>
            
            <li> <span>Costs</span><AiOutlineCopyrightCircle/>;2023 </li>
            
        </Footeer>
        
        </>
    )
}

export default Footer