import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./toggle-theme.css"

const ToggleTheme = () => {
    const { setDarkMode } = useContext( ThemeContext )
    const toggleTheme = () => setDarkMode( prevDarkMode => ! prevDarkMode )

    return  <div onClick={ toggleTheme } className="toggle-theme_wrapper" >
                <span></span>
            </div> }

export default ToggleTheme