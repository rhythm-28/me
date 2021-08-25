import react,{useState} from "react";
import styles from "../stylesheets/login.css";

import LoginNavbar from "./loginNavbar.js";
import LoginFooter from "./loginFooter.js";
import axios from "axios";
import { useCookies } from 'react-cookie';

function Login(){

    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    
    function onSubmitLoginForm(e){
        e.preventDefault();
        if(email!=="" && password!==""){
            axios.post("https://modcrew-dev.herokuapp.com/api/v1/auth/login",{
                    "email": email,
                    "password": password
                }
            )
            .then((response)=>{
                if(response.data.success===true){
                    console.log(response.data);
                    setCookie("token", response.data.token);
                    setCookie("testToken","test1234");
                    window.location.href="./";
                }else{
                    console.log("not logged in");
                }
            })
        }
    }

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    return (
        <div>
            <LoginNavbar />
            <div className="login-greeting">
                <h3>Hey, good to see you again!</h3>
                <h6>Login to get going</h6>
            </div>
            <div className="login-div">
                <form>
                    <input onChange={(e)=>{setEmail(e.target.value)}} className="login-input" type="email" placeholder="E-mail Id"></input>
                    <input onChange={(e)=>{setPassword(e.target.value)}} className="login-input" type="password" placeholder="Password"></input>
                    <br/>
                    <span>
                        <input id="remember-me" type="checkbox"></input>
                        <label for="remember-me"> Remember Me</label>
                        <span className="forgot-passwd">
                            <a href="">Forgot Password?</a>
                        </span>
                    </span>
                    <br />
                    <button onClick={(e)=>{onSubmitLoginForm(e)}} className="sign-in" type="submit">Sign In</button>
                </form>
            </div>
            <span className="new-here">New Here! <a href="">Register Now</a></span>
            <LoginFooter />
        </div>
    );
}

export default Login;