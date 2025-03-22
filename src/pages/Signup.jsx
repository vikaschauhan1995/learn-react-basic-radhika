import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return <div>
        <label>Username:</label>
        <input className="form-control" type="text" name="username" /><br />
        <label>Password:</label>
        <input className="form-control" type="text" name="username" /><br />
        <input type="submit" className="btn btn-primary" value="Sign Up" />
        <p>Already have account, <Link to="/login">Go to Login page</Link> </p>
    </div>
}

export default Signup;