import React,{useState} from 'react'
import './Login.css';
import {useNavigate} from 'react-router-dom'

import {vDoAuth} from 'lib-auth';



export default function Login() {

    const initialValues = {
        email:"raj@gmail.com",
        password:"raj12345",
        rflag:false
    }
    const [formValues,setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const nav = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(new Date());
        setFormErrors(validate(formValues));
        console.log("#########################");
        console.log(vDoAuth(formValues));
        //nav("/landing");
    }

    const handleOnChange = (event) =>{
        const isCheckBox = event.target.value === 'checkbox';
        const {name,value} = event.target;
        setFormValues(prev=>{
            return {
                ...prev,
                [name]:isCheckBox ? event.target.checked : value
            };
        });
        console.log(formValues)
    }

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!values.email) {
          errors.email = "Cannot be blank";
        } else if (!regex.test(values.email)) {
          errors.email = "Invalid email format";
        }
    
        if (!values.password) {
          errors.password = "Cannot be blank";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        }
    
        if (values.city < 0){
          errors.city = "City cannnot be blank";
        }
    
        return errors;
      };

    return (
        <>
            <section className=" text-center text-lg-start">
                <div className="card mb-3">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-lg-4 d-none d-lg-flex">
                            <img src="./assets/primrose.jpg" alt="Trendy Pants and Shoes"
                                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                        </div>
                        <div className="col-lg-8">
                            <div className="card-body py-5 px-md-5">
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email"
                                            value={formValues.email}
                                            onChange = {handleOnChange} 
                                            className="form-control" />
                                        {
                                            formErrors.email && (
                                                <span className="error">{formErrors.email}</span>
                                            )
                                        }
                                        
                                    </div>
                                    <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example2">Password</label>
                                        <input 
                                            type="password" 
                                            id="password" 
                                            name="password" 
                                            value={formValues.password}
                                            onChange = {handleOnChange} 
                                            className="form-control" />
                                        {
                                            formErrors.password && (
                                                <span className="error">{formErrors.password}</span>
                                            )
                                        }
                                        
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-center">
                                            <div className="form-check">
                                                <input 
                                                    className="form-check-input" 
                                                    type="checkbox" 
                                                    value="" 
                                                    id="rflag" 
                                                    name="rflag"
                                                    onChange = {handleOnChange} checked />
                                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
