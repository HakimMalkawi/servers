import { useContext, useRef, useLayoutEffect } from "react"
import { MenuContext } from "../../context/MenuContext"
import Exit from "./components/exit/Exit"
import Options from "./components/options/Options"
import "./menu.css"

const Menu = () => {
    const { menu } = useContext( MenuContext )
    const menuScreen = useRef( null )

    useLayoutEffect( () => {
        menu ? menuScreen.current.classList.add( "active" ) :
        menuScreen.current.classList.remove( "active" ) }, [ menu ] )

    return  <main ref={ menuScreen } className="menu_wrapper" >
                <Exit />
                <Options />
            </main> }

export default Menu