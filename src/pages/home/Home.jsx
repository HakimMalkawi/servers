import { useState } from "react"
import Login from "./components/login/Login"
import WelcomeMessage from "./components/welcome-message/WelcomeMessage"
import Error from "./components/error/Error"
import "./home.css"

const Home = () => {
    const [ error, setError ] = useState( false )
    const handleError = () => setError( true )
    const dismissError = () => setError( false )

    return  <main className="home_wrapper" aria-label="Login Page" >
                { error && <Error dismissError={ dismissError } /> }
                <WelcomeMessage />
                <Login handleError={ handleError } />
            </main> }

export default Home