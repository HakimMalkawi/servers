import { nanoid } from "nanoid"
import "./server.css"

const Server = ( { name, distance } ) =>
    <ul key={ nanoid() } className="server_wrapper" role="none" >
        <li className="server_name" aria-label="Server Name" >
            { name }
        </li>
        <li className="server_distance" aria-label="Server Distance" >
            { `${ distance } KM` }
        </li>
    </ul>

export default Server