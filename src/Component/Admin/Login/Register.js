import React, { useState } from 'react'
import Inputbox from '../Common/Inputbox'
import Dropdown from '../Common/Dropdown';
import Label from '../Common/Label';
import ButtonBox from '../Common/ButtonBox';
import { Api } from '../../../apis/Api';
import { apiUrls } from '../../../apis/ApiUrls';
import { validationMessage } from '../../../constants/validationMessage';
import { Link } from 'react-router-dom';
import ErrorLabel from '../Common/ErrorLabel';
import { toast } from 'react-toastify';
import { toastMessage } from '../../../constants/ConstantValues';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const nagivate = useNavigate();
    const modelTemple = {
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        gender: 0,
        isTcAccepted: true,
        id: 0,
        passwordPlainText: "",
        confirmPassword:'',
        password: '',
        username:''
    }
    const [model, setModel] = useState(modelTemple);
    const [error, setError] = useState();
    const textChange = (e) => {
        var { name, type, checked, value } = e.target;
        let newModel=model;
        if (type === "checkbox")
            value = checked;
        if (type === 'select-one')
            value = parseInt(value);
        if(name==='passwordPlainText'){
            newModel.password=btoa(value);
        }
        if(name==='email'){
            newModel.username=value;
        }
        newModel[name]=value;
        setModel({ ...newModel});
    }
    const validate = () => {
        var { firstname,email,confirmPassword,passwordPlainText,gender,mobile,isTcAccepted } = model;
        var err = {};
        debugger;
        if (!email || email?.length < 6 || !email.includes("@") || !email.includes(".")) err.email = validationMessage.reqUsername;
        if (!passwordPlainText || passwordPlainText?.length < 6) err.passwordPlainText = validationMessage.reqPassword;
        if (!confirmPassword || confirmPassword?.length < 6) err.confirmPassword = validationMessage.reqPassword;
        if(!firstname || firstname.length<3) err.firstname=validationMessage.reqFirstName;
        if(gender<0) err.gender=validationMessage.reqGender;
        if(!mobile || mobile.length<10) err.mobile=validationMessage.reqMobile;
        if(passwordPlainText!==confirmPassword) err.confirmPassword=validationMessage.matchPassword;
        if(!isTcAccepted) err.isTcAccepted=validationMessage.reqTnC;
        return err;
    }
    const handleRegister = () => {
        let formError = validate();
        if (Object.keys(formError).length > 0) {
            setError({ ...formError });
            return;
        }
        setError({});

        Api.Put(apiUrls.authController.register, model)
            .then(res => {
                if(res.data?.id>0)
                {
                    toast.success(toastMessage.saveSuccess);
                    nagivate("/admin/login",{replace:true});
                }
            });
    }
    return (
        <div style={{ backgroundImage: 'url(https://www.outlookindia.com/outlooktraveller/public/uploads/articles/travelnews/kashi_vishwanath_temple.jpg)' }}>
            <main className="d-flex w-100">
                <div className="container d-flex flex-column">
                    <div className="row vh-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                            <div className="text-center">
                                                <img src="/assets/img/icons/KashiYatraLogo1.png" alt="Kashi Yatra"
                                                    className="img-fluid" width="132" height="132" />
                                            </div>
                                <div className="text-center mt-4" style={{ color: 'aliceblue' }}>
                                    {/* <h1 className="h2">Get started</h1> */}
                                    <p className="lead">
                                        When you sign up. Super admin needs to approve your account.  You will receive one email to verify your email.
                                    </p>
                                    <p className="lead">
                                        <small>
                                           
                                        </small>
                                    </p>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <div>
                                                <div className="mb-3 text-start">
                                                    <Inputbox labelText="First Name" isRequired={true} name="firstname" onChangeHandler={textChange} value={model.firstname} className="form-control-sm" type="text" errorMessage={error?.firstname} placeholder="Enter your firstname" />
                                                </div>
                                                <div className="mb-3 text-start">
                                                    <Inputbox labelText="Last Name" name="lastname" onChangeHandler={textChange} value={model.lastname} className="form-control-sm" type="text" errorMessage={error?.lastname} placeholder="Enter your lastname" />
                                                </div>
                                                <div className="mb-3 text-start">
                                                    <Inputbox labelText="Email" isRequired={true} name="email" onChangeHandler={textChange} value={model.email} className="form-control-sm" type="email" errorMessage={error?.email} placeholder="Enter your email" />
                                                </div>
                                                <div className="mb-3 text-start">
                                                    <Inputbox labelText="Mobile" isRequired={true} name="mobile" onChangeHandler={textChange} value={model.mobile} className="form-control-sm" type="text" maxLength={10} errorMessage={error?.mobile} placeholder="Enter your mobile" />
                                                </div>
                                                <div className="mb-3 text-start">
                                                    <Label text="Gender" isRequired={true} />
                                                    <Dropdown name="gender" onChange={textChange} value={model.gender} className="form-control-sm" defaultText="Select Gender" DefaultTextValue={"-1"} data={[{ id: 0, value: "Male" }, { id: 1, value: "Female" }]} />
                                                    <ErrorLabel message={error?.gender}/>
                                                </div>
                                                <div className="mb-3 text-start">
                                                    <Inputbox labelText="Password" isRequired={true} name="passwordPlainText" onChangeHandler={textChange} value={model.passwordPlainText} className="form-control-sm" type="password" errorMessage={error?.password} placeholder="Enter your password" />
                                                </div>
                                                <div className="mb-3 text-start">
                                                    <Inputbox labelText="Confirm Password" isRequired={true} name="confirmPassword" onChangeHandler={textChange} value={model.confirmPassword} className="form-control-sm" type="password" errorMessage={error?.confirmPassword} placeholder="Enter your password again" />
                                                </div>
                                                <div className='text-start'>
                                                    <label className="form-check">
                                                        <input className="form-check-input" onChange={e => { textChange(e) }} type="checkbox" value="remember-me"
                                                            name="isTcAccepted" checked={model.isTcAccepted} />
                                                        <span className="form-check-label">
                                                            <small>
                                                                Accept Term & Conditions
                                                            </small>
                                                        </span>   
                                                    </label>                                                     
                                                        <ErrorLabel message={error?.isTcAccepted}/>
                                                </div>
                                                <div className="text-center mt-3 d-flex justify-content-between">
                                                    <small>
                                                        <Link to="/admin/login"> Already have account?</Link>
                                                    </small>
                                                    <ButtonBox text="Sign Up" onClickHandler={handleRegister} className="btn-sm" type="back" />

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
