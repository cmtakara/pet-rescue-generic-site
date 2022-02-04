import React from "react";

import Footer from '../../components/Footer'

const Login = () => {
    return (
        <div>
            <h1>LOG IN as an authorized user</h1>
            <p>Form to log in needs user name, password, and role </p>
            <div className="form-group">
                <label htmlFor="usr">Name:</label>
                <input type="text" class="form-control" id="usr" />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd"/> 
            </div>
            <p>Logging in will allow the authorized user to access additional functionality and pages</p><div class="checkbox">
  
            <h2>Form control: checkbox</h2>
            <p>The form below contains three checkboxes. The last option is disabled:</p>
            <form>
            <div className="checkbox">
                <label><input type="checkbox" value="" />Owner</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" value="" />Volunteer</label>
            </div>
            <div class="checkbox disabled">
                <label><input type="checkbox" value="" disabled/>Foster</label>
            </div>
            </form>
</div>

            <p>OWNER, VOLUNTEER, FOSTER </p>
            <Footer />
        </div>
    )
}

export default Login