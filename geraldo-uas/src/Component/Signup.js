import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import Firebase from '../firebase/config';
import Login from './Login';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await Firebase.auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(
            Firebase.database().ref('user').push({
              email: email.value,
            })
          );
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const back = () => {
    history.push('/login');
  };

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-title'>
          <h2>Create Account</h2>
          <div class='underline-title'></div>

          <form className='loginbox' onSubmit={handleSignUp}>
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

            <input
              id='submit-btn'
              type='submit'
              name='submit'
              value='Create Account'
            />
            <br></br>
            <a href='#' id='signup' onClick={back}>
              &nbsp; Back To Login ?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
