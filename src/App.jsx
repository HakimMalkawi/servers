import { BrowserRouter } from "react-router-dom"
import { LoginProvider } from "./context/LoginContext"
import { ThemeProvider } from "./context/ThemeContext"
import { MenuProvider } from "./context/MenuContext"
import AppRouter from "./routes/AppRouter"
import "./app.css"

const App = () =>
    <BrowserRouter>
        <LoginProvider>
            <ThemeProvider>
                <MenuProvider>
                    <AppRouter />
                </MenuProvider>
            </ThemeProvider>
        </LoginProvider>
    </BrowserRouter>

export default App