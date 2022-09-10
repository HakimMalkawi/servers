import { useState, useEffect, createContext } from "react"
import { fetchStorage, setStorage } from "../utils/handleStorage"

export const ThemeContext = createContext()

export const ThemeProvider = ( { children } ) => {
    const preferences = fetchStorage( "dark_mode" ) === null ? true : fetchStorage( "dark_mode" )
    const [ darkMode, setDarkMode ] = useState( preferences )
    useEffect( () => { setStorage( "dark_mode", darkMode ) }, [ darkMode ] )

    return  <ThemeContext.Provider value={ { darkMode, setDarkMode } } >
                { children }
            </ThemeContext.Provider> }