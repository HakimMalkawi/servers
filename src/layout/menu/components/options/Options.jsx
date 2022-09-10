import ToggleTheme from "../../../../components/toggle-theme/ToggleTheme"
import Logout from "../../components/logout/Logout"
import "./options.css"

const Options = () =>
    <section className="options_wrapper" >
        <h1>Options</h1>
        <ToggleTheme />
        <Logout />
    </section>

export default Options