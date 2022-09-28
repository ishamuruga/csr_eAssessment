import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import {
  clearSession,
  fetchCeCCategory,
  setSession,
  vDoAuth,
} from '@e-v-assessment-workspace/lib-auth';
import { MessageService } from '@e-v-assessment-workspace/lib-auth';

interface usermodel {
  email: string;
  password: string;
  rflag: boolean;
}

export default function Login() {
  let vFlag = true;

  useEffect(() => {
    MessageService.clearMessage();
  });

  const initialValues: usermodel = {
    email: 'rajk',
    password: 'rajk12345',
    rflag: false,
  };
  const [authfail, setAuthfail] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });
  const [valid, setValid] = useState(true);
  const nav = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //console.log(new Date());
    // eslint-disable-next-line prefer-const
    let errs = validate(formValues);
    setFormErrors(errs);

    if (Object.keys(errs).length > 0) {
      //console.log('Validation Failed.....');
      return;
    }
    //console.log('///////////////////////');

    if (!valid) {
      return;
    }

    //delete this
    // MessageService.sendMessage({
    //   event: 'LOGIN_SUCESS',
    //   payload: {
    //     status: true,
    //   },
    //   ts: new Date(),
    // });
    // nav('/landing');

    vDoAuth(formValues)
      .then((x: any) => {
        setSession('auth', JSON.stringify(x.data));

        MessageService.sendMessage({
          event: 'LOGIN_SUCESS',
          payload: {
            status: true,
          },
          ts: new Date(),
        });

        nav('/landing');
      })
      .catch((err) => {
        setAuthfail(true);
        console.log('login failed');
      });
  };

  const handleOnChange = (event: any) => {
    const isCheckBox = event.target.value === 'checkbox';
    const { name, value } = event.target;
    setFormValues((prev: any) => {
      return {
        ...prev,
        [name]: isCheckBox ? event.target.checked : value,
      };
    });
    //console.log(formValues);
  };

  const validate = (values: usermodel) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Cannot be blank';
    } //else if (!regex.test(values.email)) {
    //errors.email = "Invalid email format";
    //}

    if (!values.password) {
      errors.password = 'Cannot be blank';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    }

    if (Object.keys(errors).length > 0) {
      setValid(false);
    }
    return errors;
  };

  useEffect(() => {
    console.log("reset...");
    setAuthfail(false);
    clearSession();
  },[]);

  return (
    <div>
      <section className=" text-center text-lg-start">
        <div>
          <h1>Dat-{authfail+""}</h1>
          {authfail && (
            <div className="alert alert-warning" role="alert">
            Pls check your Creds.
          </div>
          )}
        </div>
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="./assets/img/primrose.jpg"
                alt="Trendy Pants and Shoes"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">
                      User Name
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleOnChange}
                      className="form-control"
                    />
                    {formErrors.email && (
                      <span className="error">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formValues.password}
                      onChange={handleOnChange}
                      className="form-control"
                    />
                    {formErrors.password && (
                      <span className="error">{formErrors.password}</span>
                    )}
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
                          onChange={handleOnChange}
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example31"
                        >
                          {' '}
                          Remember me{' '}
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
