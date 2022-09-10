import "./error.css"

const Error = ( { dismissError } ) =>
    <aside className="error_wrapper" aria-label="Error Screen" >
        <section className="error_content" role="none" >
            <h1>Woops, looks like you used the <span>wrong</span> login credentials.</h1>
            <h2>Check the input labels for a hint ;)</h2>
            <button onClick={ dismissError } >Take me back</button>
        </section>
    </aside>

export default Error