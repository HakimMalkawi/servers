export const fetchToken = async ( username = "tesonet", password = "partyanimal" ) => {
    const url = `https://playground.tesonet.lt/v1/tokens?username=${username}&password=${password}`
    const options = { method: "POST", headers: { "Content-Type": "text/javascript" } }
    
    try {   const response = await fetch( url, options )
            if ( ! response.ok ) throw new Error( "Unsuccessful authentication attempt" )

            const { token } = await response.json()
            return token }

    catch ( error ) { console.error( error ) } }