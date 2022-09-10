import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import ToggleTheme from "../../components/toggle-theme/ToggleTheme"
import MenuButton from "./components/menu-button/MenuButton"
import "./navbar.css"

const Navbar = () => {
    const { login } = useContext( LoginContext )

    return  <nav className="navbar_wrapper" aria-label="Navbar" >
                { login ? <MenuButton /> : <ToggleTheme /> }
            </nav> }

export default Navbar