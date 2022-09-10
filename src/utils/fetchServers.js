import { fetchStorage } from "./handleStorage"

export const fetchServers = async () => {
    const url = `https://playground.tesonet.lt/v1/servers`
    const headers = { "Authorization": `Bearer ${ fetchStorage( "login_credentials" ) }` }
    
    try {   const response = await fetch( url, { headers } )
            if ( ! response.ok ) throw new Error( "Failed to fetch server data" )
            
            return await response.json() }
    
    catch ( error ) { console.error( error ) } }