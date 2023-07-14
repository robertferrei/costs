import { Link, useLocation } from "react-router-dom"

function Header(){
    const {pathname}=useLocation()
    return(
        <>
        <ul>

            <li isActive={pathname === "/"}>
                <Link to="/">home</Link>
            </li>

            <li isActive={pathname.includes ("Company")}>
                <Link to="/Company">Company</Link>
            </li>
            
            <li isActive={pathname.includes ("contact")}>
                <Link to="/contact">contato</Link>
            </li>

            
            <li isActive={pathname.includes ("newproject")}>
                <Link to="/newproject">Novo projeto</Link>
            </li>
        </ul>
        
        </>
    )
}

export default Header