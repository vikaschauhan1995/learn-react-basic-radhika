import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Login = () => {
    const params = useParams();
    useEffect(() => {
        console.log("params=>>", params);
    });
    return <div>
        <label>Username:</label>
        <input value={params?.email} className="form-control" type="text" name="username" /><br />
        <label>Password:</label>
        <input value={params?.password} className="form-control" type="text" name="username" /><br />
        <input type="submit" className="btn btn-primary" value="Login" /><br />
        <p>Don`&apos;t have account, <Link to="/signup">Go to Signup page</Link> </p>
    </div>
}

export default Login;