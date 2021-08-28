import react,{useState} from "react";
import styles from "../stylesheets/login.css";

import LoginNavbar from "./loginNavbar.js";
import LoginFooter from "./loginFooter.js";
import axios from "axios";
import { useCookies} from 'react-cookie';

function Login(){

    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    
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
                    // setCookie("token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGQ3MGE3YWFhZDY1NWU4YzhiMzk1ZSIsImlhdCI6MTYzMDA1NDU5OCwiZXhwIjoxNjMwNjU5Mzk4fQ.kZ13dEP_PaUPFdxOJz1ABVB8f94wH8eJfTMnJOXoapw; Path=/; HttpOnly; Expires=Fri, 03 Sep 2021 08:56:38 GMT;");
                    setCookie("token", response.data.token);
                    // setCookie("testToken","test1234");
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
                            <a href="/forgotPassword">Forgot Password?</a>
                        </span>
                    </span>
                    <br />
                    <button onClick={(e)=>{onSubmitLoginForm(e)}} className="sign-in" type="submit">Sign In</button>
                </form>
            </div>
            <span className="new-here">New Here! <a href="/signup">Register Now</a></span>
            <LoginFooter />
        </div>
    );
}

export default Login;