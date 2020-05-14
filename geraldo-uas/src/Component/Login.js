import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import './Login.css';
import Firebase from '../firebase/config';
import { AuthContext } from './Auth';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await Firebase.auth().signInWithEmailAndPassword(
          email.value,
          password.value
        );
        Firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            console.log('Welcome: ' + user.email);
          }
        });
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const signUp = () => {
    history.push('/signup');
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-title'>
          <h2>Login Account</h2>
          <div class='underline-title'></div>

          <form className='loginbox' onSubmit={handleLogin}>
            <br></br>
            <input
              name='email'
              type='email'
              placeholder='Email'
              className='form-content'
            />
            <div class='form-border'></div>

            <br></br>
            <input
              name='password'
              type='password'
              placeholder='Password'
              className='form-content'
            />
            <div class='form-border'></div>
            <br></br>

            <input id='submit-btn' type='submit' name='submit' value='LOGIN' />
            <br></br>
            <a href='#' id='signup' onClick={signUp}>
              &nbsp; Don't have account yet?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
