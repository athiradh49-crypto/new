import { useState } from "react";
import axios from 'axios';

    function Login1(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login',{
                username: username, 
                password: password,

            });
            if (response.status === 200) {
                alert("Login Success.");
                props.setIsLoggedIn(true);   
            }
        } catch (error) {
alert("invalid username or password.try again!");
console.error(error);

        }  
    };
        const handleRegister = async () => {
            try{
                const response = await axios.post('http://localhost:3000/register', {
                     username: username,
            password: password
                });
                if (response.status === 200) {
                    alert("Account created successfully! You can now log in.");
                    setIsRegistering(false);
                }
        } catch (error){
            alert("Failed to create account.");
            console.error(error);

        }
     };
     return (
        <div className="d-flex justify-content-center align-itens-center bg-light" style={{height:"100vh"}}>
          <div className="bg-white p-5 shadow rounded" style={{width:"400px"}}>
            {}
            <h1 className="text-center mb-4">
                {isRegistering ?"Create Account" :"welcome Back"}
            </h1>
            <input
            type="text" placeholder="enter password"
            className="from-control mb-3"
            onChange={(e) => setUsername(e.target.value)}
            />

            <input
            type="password"
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
            
            />
            {
                isRegistering ? (
                    
                        
                    <button className="btn btn-success w-100 mb -3" onClick={handleRegister}>
                        Sign up
                        </button>
                ) : (
                    <button className="btn btn-dark w-100 mb -3" onClick={handleLogin}>
                        Login
                    </button>
                )
            }
            <div className="text-center mt-3">
                {isRegistering ? (
                    <p>
                        Already have an account ? <br/>
                        <span
                        className="text-primary"
                        style={{cursor: "pointer", textDecoration: "underline"}}
                        onClick={() => setIsRegistering(false)}>
                            Log in here
                        </span>
                    </p>
                ) : (
                    <p>
                        Don't have an account?<br/>
                        <span
                        className="text-primary"
                        style={{cursor: "pointer", textDecoration:"underline"}}
                        onClick={() => setIsRegistering(true)}>
                            Register here
                        </span>
                    </p>

                )}
            </div>
          </div>
        </div>
     );
    }
    export default Login1;