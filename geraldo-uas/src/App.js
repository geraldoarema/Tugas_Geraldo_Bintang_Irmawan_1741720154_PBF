import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { AuthProvider } from './Component/Auth';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
