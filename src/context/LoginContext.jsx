import { useState, useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"
import { fetchStorage, setStorage } from "../utils/handleStorage"

export const LoginContext = createContext()

export const LoginProvider = ( { children } ) => {
    const [ login, setLogin ] = useState( fetchStorage( "login_credentials" ) )
    const navigate = useNavigate()

    useEffect( () => { 
        navigate( login ? "servers" : "/" )
        setStorage( "login_credentials", login ) }, [ login ] )

    return  <LoginContext.Provider value={ { login, setLogin } } >
                { children }
            </LoginContext.Provider> }