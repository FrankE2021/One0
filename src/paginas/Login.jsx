import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import Contexto from "../context/Contexto";

const Login = () => {
    const {logearme}=useContext(Contexto)
    const navegacion=useNavigate();
    const login=()=>{
        navegacion("/", {replace:true})
        logearme('eurekae')
    }
    return (
        <>
        <div className="conlogin">
            <h1>Pantalla de Login</h1>
            <button onClick={login}>Login</button>
        </div>    
        </>
    )
}

export default Login    