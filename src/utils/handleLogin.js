import { fetchToken } from "./fetchToken"

export const handleLogin = async ( { username, password }, setLogin, handleError ) => {
    try {   const token = await fetchToken( username, password )
            if ( ! token ) throw new Error( 401 )
            
            setLogin( token ) }

    catch( error ) { handleError() } }