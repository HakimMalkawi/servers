import { useState, useLayoutEffect } from "react"
import { fetchServers } from "../../utils/fetchServers"
import { sortAlphabetically } from "./helpers/sortData"
import Server from "./components/server/Server"
import Controls from "./components/controls/Controls"
import Loader from "../../components/loader/Loader"
import "./servers.css"

const Servers = () => {
    const [ servers, setServers ] = useState( null )

    useLayoutEffect( () => { ( async () => 
        setServers( sortAlphabetically( await fetchServers() ) ) )() }, [] )

    return  <main className="servers_wrapper" aria-label="Available Servers" >
                <Controls setServers={ setServers } />
                <section className="server-list_wrapper" role="none">
                    { servers ? servers.map( Server ) : <Loader /> }
                </section>
            </main> }

export default Servers