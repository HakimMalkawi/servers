import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import Menu from "../layout/menu/Menu"
import Navbar from "../layout/navbar/Navbar"
import Home from "../pages/home/Home"
import Servers from "../pages/servers/Servers"

const AppRouter = () => {
    const { darkMode } = useContext( ThemeContext )
    
    return  <div className={ `app_wrapper ${ darkMode ? "dark" : "light" }` } role="none" >
                <Menu />
                <Navbar />
                <Routes>
                    <Route index path="servers/home" element={ <Home /> } />
                    <Route path="servers/list" element={ <Servers /> } />
                </Routes> 
            </div> }

export default AppRouter