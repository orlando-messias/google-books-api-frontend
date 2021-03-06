// react
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// react-icons
import { IoPersonAddSharp } from 'react-icons/io5';
// services
import {
  passwordValidation,
  emailValidation,
  generalValidation
} from '../services/loginServices';
import userApi from '../services/userAPI';
// styles
import './LoginStyles.css';


export default function Register() {
  // local states
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errorName, setErrorName] = useState(true);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [error, setError] = useState('');
  const [modified, setModified] = useState(false);

  const history = useHistory();

  // checks if email and password are valid everytime object userRegister changes
  useEffect(() => {
    generalValidation(userRegister.name)
      ? setErrorName(false)
      : setErrorName(true);

    emailValidation(userRegister.email)
      ? setErrorEmail(false)
      : setErrorEmail(true);

    passwordValidation(userRegister.password)
      ? setErrorPassword(false) :
      setErrorPassword(true);
  }, [userRegister]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUserRegister(prevState => ({
      ...prevState,
      [name]: value
    }));

    setModified(true);
  };

  const register = () => {
    userApi.post('/users/save', userRegister)
      .then(() => {
        history.push('/');
      })
      .catch((e) => setError(e.response.data.message))
  };

  return (

    <div className="pageLoginContainer">
      <div className="loginContainer">

        <div className="icon">
          <IoPersonAddSharp />
        </div>

        <p className="title">NEW USER</p>

        <div className="form">
          <div className="fieldsContainer">
            <input
              name="name"
              type="text"
              autoFocus
              value={userRegister.name}
              onChange={handleInputChange}
              className={`field ${errorName ? 'error' : 'noError'}`}
              placeholder="name *"
            />
            <input
              name="email"
              type="text"
              value={userRegister.email}
              onChange={handleInputChange}
              className={`field ${errorEmail ? 'error' : 'noError'}`}
              placeholder="email *"
            />
            <input
              name="password"
              type="password"
              value={userRegister.password}
              onChange={handleInputChange}
              className={`field ${errorPassword ? 'error' : 'noError'}`}
              placeholder="password (letters and numbers)"
            />
          </div>

          {error && <span className="errorSpan">{error}</span>}

          <button
            className="formButton"
            onClick={register}
            disabled={
              !(generalValidation(userRegister.name)
                && emailValidation(userRegister.email)
                && passwordValidation(userRegister.password)
                && modified
              )
            }
          >
            <span>Register</span>
          </button>

        </div>
      </div>
    </div>
  );
};