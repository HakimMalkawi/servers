import { useContext } from "react"
import { LoginContext } from "../../../../context/LoginContext"
import { MenuContext } from "../../../../context/MenuContext"
import "./logout.css"

const Logout = () => {
    const { setLogin } = useContext( LoginContext )
    const { setMenu } = useContext( MenuContext )
    const logout = () => { 
        setLogin( false ) 
        setTimeout( () => setMenu( false ), 250 ) }

    return  <button onClick={ logout } className="logout_wrapper" aria-label="Logout" >
                Logout
            </button> }

export default Logout