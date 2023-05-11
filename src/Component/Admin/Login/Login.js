import React, { useState, useEffect } from 'react'
import Inputbox from '../Common/Inputbox'
import { validationMessage } from '../../../constants/validationMessage';
import { Link } from 'react-router-dom';
import ButtonBox from '../Common/ButtonBox';
import { Api } from '../../../apis/Api';
import { apiUrls } from '../../../apis/ApiUrls';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function Login({setAuthData}) {
    const nagivate = useNavigate();
    const loginModelTemplet = {
        username: "",
        password: "",
        rememberMe: false
    }
    const [loginModel, setLoginModel] = useState(loginModelTemplet);
    const [error, setError] = useState();
    useEffect(() => {
        let data = {
          isAuthenticated: false,
          role: "",
          name: "",
          email: "",
          mobile: "",
        }
        try {
          var storaData = localStorage.getItem(process.env.REACT_APP_STORAGE_KEY) ?? JSON.stringify(data);
          storaData = storaData.replace("\"{", "'{").replace("}\"", "}'")
          storaData = JSON.parse(storaData);
          var token = storaData?.accessToken;
          var decodedToken = jwtDecode(token);
          if (decodedToken?.exp===undefined || new Date() > new Date(decodedToken?.exp * 1000)) {
            nagivate("/admin/login", {replace:true})
            return;
          }
          
          else if( new Date() <= new Date(decodedToken?.exp * 1000))
          {
            setAuthData({ ...storaData });
            nagivate("/admin/dashboard", {replace:true})
          }
        } catch (error) {
          console.log("invalid token", error);
          nagivate("/admin/login", {replace:true})
        }
    
      },[]);
    const textChangeHandler = (e) => {
        var { name, value, type,checked } = e.target;
        if(type==="checkbox")
        value=checked;
        setLoginModel({ ...loginModel, [name]: value });
    }
    const handleLogin = () => {
        let formError = validate();
        if (Object.keys(formError).length > 0) {
            setError({ ...formError });
            return;
        }
        setError({});

        var model = {
            username: loginModel.username,
            password: btoa(loginModel.password)
        };
        Api.Post(apiUrls.authController.login, model)
            .then(res => {
                if (res.data?.accessToken?.length > 100) {
                    var authData = res.data;
                    authData.rememberMe=loginModel.rememberMe;
                    var objString=JSON.stringify(authData);
                    objString=objString.replace("\"{","'{").replace("}\"","}'");
                    localStorage.setItem(process.env.REACT_APP_STORAGE_KEY,objString );
                    nagivate("/admin/dashboard",{replace:true});
                }
            }).catch(err => {

            })
    }

    const validate = () => {
        var { username, password } = loginModel;
        var err = {};
        if (!username || username?.length < 6 || !username.includes("@") || !username.includes(".")) err.username = validationMessage.reqUsername;
        if (!password || password?.length < 6) err.password = validationMessage.reqPassword;
        return err;
    }
    return (
        <div style={{ backgroundImage: 'url(https://www.outlookindia.com/outlooktraveller/public/uploads/articles/travelnews/kashi_vishwanath_temple.jpg)' }}>
            <main className="d-flex w-100">
                <div className="container d-flex flex-column">
                    <div className="row vh-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-4" style={{ color: 'aliceblue' }}>
                                    <h1 className="h2"
                                        style={{ color: 'beige', fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                                        Welcome back</h1>
                                    <p className="lead">
                                        Sign in to your account to continue
                                    </p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <div className="text-center">
                                                <img src="/assets/img/icons/KashiYatraLogo1.png" alt="Kashi Yatra"
                                                    className="img-fluid" width="132" height="132" />
                                            </div>
                                            <div>
                                                <div className="mb-3 text-start">
                                                    <Inputbox labelText="Email" onChangeHandler={textChangeHandler} labelFontSize={14} name="username" isRequired={true} value={loginModel.username} errorMessage={error?.username} type="email" placeholder="Enter your email" className="form-control-sm" />
                                                </div>
                                                <div className="mb-3 text-start">
                                                    <Inputbox labelText="Password" onChangeHandler={textChangeHandler} labelFontSize={14} name="password" isRequired={true} value={loginModel.password} errorMessage={error?.password} type="password" placeholder="Enter your password" className="form-control-sm" />
                                                    <small>
                                                        <Link to="/admin/login/reset">Forgot password?</Link>
                                                    </small>
                                                </div>
                                                <div className='text-start'>
                                                    <label className="form-check">
                                                        <input className="form-check-input" onChange={e=>{textChangeHandler(e)}} type="checkbox" value="remember-me"
                                                            name="rememberMe" checked={loginModel.rememberMe} />
                                                        <span className="form-check-label">
                                                            Remember me next time
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="text-center mt-3 d-flex justify-content-between">
                                                <small>
                                                        <Link to="/admin/register"> Do not have account? Click for Sign Up</Link>
                                                    </small>
                                                    <ButtonBox text="Sign in" onClickHandler={handleLogin} className="btn-sm" type="back" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
