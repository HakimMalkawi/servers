import { useContext, useRef, useLayoutEffect } from "react"
import { MenuContext } from "../../../../context/MenuContext"
import "./menu-button.css"

const MenuButton = () => {
    const { menu, setMenu } = useContext( MenuContext )
    const initialMount = useRef( true )
    const buttonRef = useRef( null )

    const toggleMenuButton = () => buttonRef.current.classList.toggle( "active" )

    const toggleMenuAnimation = () => {
        if ( ! buttonRef.current.classList.contains( "active" ) ) {
            toggleMenuButton()
            setTimeout( () => setMenu( true ), 350 ) } }

    const buttonOptions = {
        onClick: toggleMenuAnimation,
        ref: buttonRef,
        className: "menu-button_wrapper", }

    useLayoutEffect( () => {
        if ( ! menu && ! initialMount.current ) setTimeout( () => toggleMenuButton(), 350 ) 
        initialMount.current = false }, [ menu ] )
    
    return  <ul { ...buttonOptions } >
                <li></li>
                <li></li>
                <li></li>
            </ul> }

export default MenuButton