import React from "react";

import Footer from '../../components/Footer'

const Login = () => {
    return (
        <div>
            <h1>LOG IN as an authorized user</h1>
            <p>Form to log in needs user name, password, and role </p>
            <p>Logging in will allow the authorized user to access additional functionality and pages</p>
            <p>OWNER, VOLUNTEER, FOSTER </p>
            <Footer />
        </div>
    )
}

export default Login