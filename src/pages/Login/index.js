import React, { useState } from "react";

import Footer from '../../components/Footer'

const Login = ({ setUser }) => {
    const [userName, setUserName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        console.log(e.target.usr.value)
        setUser(e.target.usr.value)
    }

        // does not exist
    // console.log('in login user is ', user)

    return (
        <div>
            <h1>LOG IN as an authorized user</h1>

            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="usr">Name:</label>
                <input type="text" class="form-control" id="usr" />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" />
            </div>
            <p>Logging in will allow the authorized user to access additional functionality and pages</p><div class="checkbox">

                <p>Choose the role that you are loggingin as:</p>
                
                    <div className="checkbox">
                        <label><input type="checkbox" value="" />Owner</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value="" />Volunteer</label>
                    </div>
                    <div className="checkbox disabled">
                        <label><input type="checkbox" value="" disabled />Foster</label>
                    </div>
                    <button type='submit' className='btn-primary'> Submit </button>
            </div>
            </form>

            
            <Footer />
        </div>
    )
}

export default Login