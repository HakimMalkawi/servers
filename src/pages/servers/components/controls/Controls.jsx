import { sortAlphabetically, sortNumerically } from "../../helpers/sortData"
import "./controls.css"

const Controls = ( { setServers } ) => {
    const sortByDistance = () => setServers( sortNumerically )
    const sortByCountry = () => setServers( sortAlphabetically )

    return  <section className="controls_wrapper" aria-label="Sorting Options" >
                <button onClick={ sortByDistance } >
                    Sort by distance
                </button>
                <button onClick={ sortByCountry } >
                    Sort by country
                </button>
            </section> }

export default Controls