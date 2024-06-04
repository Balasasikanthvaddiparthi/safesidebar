
import { useEffect, useState } from 'react'
import './App.css'
import { MyContext } from './Mycontext'
import SideBar from './components/FixedComponents/SideBar'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import GlobalRoutes from './components/GlobalRoutes'
import Header from './components/FixedComponents/Header'
//import LoginForm from './components/LoginForm'

function App() {
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    const[authed,setAuthed]=useState(false)
    const [role,setRole]=useState(null)
    const navigate=useNavigate();

    useEffect(() => {
      if (typeof (authed) === "string") {
        //console.log(authed)
        const decode = jwtDecode(authed);
        window.localStorage.setItem("token", JSON.stringify(authed))
        setIsAuthenticated(true)
        navigate("/Dashboard")
      }
    }, [authed])

    useEffect(() => {
      const token = window.localStorage.getItem("token")
      //console.log(token)
      if (token) {
        setIsAuthenticated(true)
        const decode = jwtDecode(token);
  
        console.log(decode.roles)
         setRole(decode.roles)
      } else {
        navigate('/login');
      }
    }, [navigate, isAuthenticated])
    

  return (
    <MyContext.Provider value={{authed,setAuthed,role}}>
    {/*<LoginForm />*/}
    {isAuthenticated &&(
        <>
        <SideBar />
        <Header />
        </>
    )}
  <GlobalRoutes isAuthenticated={isAuthenticated} />


    </MyContext.Provider>
  )
}

export default App
