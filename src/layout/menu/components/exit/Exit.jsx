import { useContext } from "react"
import { MenuContext } from "../../../../context/MenuContext"
import "./exit.css"

const Exit = () => {
    const { setMenu } = useContext( MenuContext )
    const closeMenu = () => setMenu( false )

    return  <div onClick={ closeMenu } className="exit-button_wrapper" >
                <span></span>
                <span></span>
            </div> }

export default Exit