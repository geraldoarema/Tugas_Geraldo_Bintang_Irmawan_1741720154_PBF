import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import './App.css';
import logo from './img/aldo.png';
import img1 from './img/baju.jpg';
import ItemDetails from './component/ItemDetails/ItemDetails';
import Total from './component/Total/Total';
import TotalAwal from './component/TotalAwal/TotalAwal';

export default function AuthExample() {
  return (
    <Router>
      <div className='all'>
        <div className='content'>
          <Switch>
            <header className='headers'>
              <div className='headers-top'>
                <img src={logo} alt='Logo' />
                <h1 className='logotext'>Store</h1>
                <ul className='menu'>
                  <li className='menu-items'>
                    <Link to='/public'>PRODUCT</Link>
                  </li>
                </ul>
              </div>
              <div className='headers-bottom'>
                <LoginPage />
              </div>
            </header>
          </Switch>

          <div>
            <Switch>
              <Route path='/public'>
                <PublicPage />
              </Route>
              <Route path='/login'>
                <Private />
              </Route>
              <PrivateRoute path='/private'>
                <ProtectedPage />
              </PrivateRoute>
            </Switch>
          </div>
        </div>

        <footer className='footers'>
          {realAuth.isAuthenticated ? <AuthButton /> : <Hello />}
        </footer>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const realAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    realAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
  signout(cb) {
    realAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <div className='text-right'>
      <button
        className='btnsignout'
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}>
        Sign Out
      </button>
    </div>
  ) : (
    <Fragment>Belanja Skuy</Fragment>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return (
    <>
      <div className='mh-100'>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='judultext'>
            <h3>Welcome to aldo store</h3>
          </div>
        </div>
      </div>
      <div className='imgset container'>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12'>
            <div className='card'>
              <img
                className='card-img-top mt-5 '
                src={img1}
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Kaos Vespa Skuy</h5>
                <p className='card-text'>Rp.150.000</p>
                <a href='/private' className='btn btn-primary'>
                  Tumbas Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProtectedPage() {
  const [totalawal, setTotalAwal] = useState(150000);
  const [totalhrg, setTotal] = useState(150000);
  const [showAlert, setShowAlert] = useState(false);
  const handleToggle = () => {
    setShowAlert(prevState => !prevState);
  };

  return (
    <div className='container'>
      <div className='pembayaran'>
        <h1 className='checkouttext'>Checkout</h1>
        <hr />
        <TotalAwal price={totalawal} />
        <hr />
        <Total price={totalhrg} />
        <hr />
        <ItemDetails price={totalhrg} />
        <hr />
        <button className='btn btn-primary' onClick={handleToggle}>
          Tumbas
        </button>

        {showAlert ? (
          <div className='alertBox'> Terimakasih Sudah Berbelanja </div>
        ) : (
          <div className='d-none'></div>
        )}
      </div>
    </div>
  );
}

function Hello() {
  return <h3>hello</h3>;
}

const Private = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <h3 className='judultext'>Login Dulu !!!</h3>
    </div>
  );
};

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <button className='btn daftar' onClick={login}>
        Log in
      </button>
    </div>
  );
}
