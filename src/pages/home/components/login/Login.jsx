import { useState, useContext } from "react"
import { LoginContext } from "../../../../context/LoginContext"
import { handleLogin } from "../../../../utils/handleLogin"
import "./login.css"

const Login = ( { handleError } ) => {
    const defaultCredentials = { username: "", password: "" }
    const [ credentials, setCredentials ] = useState( defaultCredentials )
    const { setLogin } = useContext( LoginContext )

    const handleInputChange = ( { target: { id: fieldName, value: inputValue } } ) =>
        setCredentials( prevCredentials => ( { ...prevCredentials, [ fieldName ]: inputValue } ) )

    const labelOptions = labelName => ( {
        htmlFor: labelName,
        className: `${ labelName }_label` } )

    const inputOptions = inputName => ( { 
        onChange: handleInputChange, 
        value: credentials[ inputName ], 
        name: inputName, 
        id: inputName,
        required: true, } )

    const handleSubmit = ( e ) => {
        e.preventDefault()
        handleLogin( credentials, setLogin, handleError )
        setCredentials( defaultCredentials ) }

    return  <form onSubmit={ handleSubmit } action="none" className="login_wrapper" >
                <label { ...labelOptions( "username" ) } >Username ( tesonet )</label>
                <input { ...inputOptions( "username" ) } type="text" />

                <label { ...labelOptions( "password" ) } >Password ( partyanimal )</label>
                <input { ...inputOptions( "password" ) } type="password" />

                <button>Login</button>
            </form> }

export default Login