import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Mycontext";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {authed,setAuthed}=useContext(MyContext)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Create a data object with the username and password
        const data = {
            username: username,
            password: password
        };
        try {
            const response = await fetch('https://www.jeevikasjy.in/livelihood/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const data = await response.json()

                const accessToken = data.accessToken

                // Handle successful login
                console.log(accessToken)
                setAuthed(accessToken)
               
                console.log('Login successful');
            } else {
                // Handle unsuccessful login
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        console.log(token)
        if (token) {
          navigate("/Dashboard")
        } 
      }, [navigate])

    return (
        <div className="card mx-auto w-full max-w-5xl  shadow-xl">
            <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-base-content " >Email Id</span>
                                </label>
                                <input type="text"  onChange={(e) => setUsername(e.target.value)} placeholder="" className="input  input-bordered w-full " />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-base-content ">Password</span>
                                </label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="" className="input  input-bordered w-full " />
                            </div>
                        </div>
                        <div className='text-right text-primary'><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span>
                        </div>
                        <button type="submit" className="btn mt-2 w-full btn-primary" >Login</button>
                        <div className='text-center mt-4'> dont have account? <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm