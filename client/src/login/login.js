import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './login.css'
import Axios from 'axios';
export default class Login extends Component {
    state={
        username: '',
        password: '',
        loginFailed: false,
    }
    changeUsername(event){
        console.log(event.target)
        this.setState({[event.target.name]: event.target.value});
    }
    login(){
        Axios.post('http://localhost:4100/users/login').then(apiResponse=>{
            if(!apiResponse.data.bearer || !apiResponse.data.user){
                this.setState({loginFailed: true})
            }
            else{
                localStorage.setItem('jwt', apiResponse.data.bearer);
                this.renderDashboard(apiResponse.data.user)
            }
            
        })
    }
    renderDashboard(user){
        this.setState({loginFailed: false})
    }
    render() {

   

        return (
            <>
            <img
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "230px",
            zIndex: "0",
            opacity: '40%'
          }}
          src={require("../resources/splash.png")}
        ></img>
            <div className="loginbox">
            <img src={require('../resources/user.png')}className="avatar"/>
                <h1>Login Here</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="username" placeholder="Enter Username" onChange={event=>{this.changeUsername(event);}}/>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Enter Password" onChange={event=>{this.changeUsername(event);}}/>
                   
                    <Link style={{textDecoration: 'none'}} to='/admin/home'>
                    <input type="submit" name="" value="Login" href='/admin/home'/>
                    </Link>
                    <a style={{color: 'red', visibility: this.state.loginFailed? 'visible':'hidden'}}>Login unsuccessful</a><br/>
                    <a href="#">Lost your password?</a><br/>
                    <a href="#">Don't have an account?</a>
                </form>
            </div>
            </>
        )
    }
}
