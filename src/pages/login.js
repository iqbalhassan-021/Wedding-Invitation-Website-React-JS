import React, { useState } from "react";
import { Navigate , useNavigate } from 'react-router-dom';


import '../App.css';
function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleLogin(event) {
        event.preventDefault();

        // Check if username and password match the criteria
        if (username === "admin@weddingsite" && password === "@admin47") {
            setIsLoggedIn(true); // Set isLoggedIn to true
            navigate('/admin'); // Navigate to the admin page
        } else {
            setErrorMessage("Incorrect credentials");
        }
    }

    return (
        <>
            <div id="login_page">
                <div className="cover">
                    <div className="login-section disp-flex-col">
                        <form onSubmit={handleLogin} className="login-form" id="loginform">
                            <h3 style={{ textAlign: "center" }}>Login</h3>
                         
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" required placeholder="username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <p style={{ opacity:"0"}}>01</p>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required placeholder="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p style={{ opacity:"0"}}>01</p>
                            <p style={{ color: "red" }}>{errorMessage}</p>
                            <input type="submit" value="Login" className="button-primary" style={{ backgroundColor: "black", color: "white" }} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
