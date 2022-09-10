import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React, { StrictMode } from "react"
import { render } from "react-dom"
import App from "./App"

render( <StrictMode> <App /> </StrictMode>, document.querySelector( "#root" ) )