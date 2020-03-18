import React, { Fragment } from 'react';
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
import logo from './img/aldo.png';
import img1 from './img/baju.jpg';
import './App.css';

export default function AuthExample() {
  return (
    <Router>
      <div className='all'>
        <div className='content'>
          <Switch>
            <header className='headers'>
              <div className='headers-top'>
                <img src={logo} alt='Logo' />
                <ul className='menu'>
                  <li className='menu-items'>
                    <Link to='/public'>public</Link>
                    <Link to='/private'>private</Link>
                  </li>
                </ul>
              </div>
              <div className='headers-bottom'>
                <LoginPage />
              </div>
            </header>
          </Switch>

          <div>
            {/* <AuthButton /> */}

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
        className='btnbuy'
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
    <div className='mh-100'>
      <div className='d-flex align-items-center justify-content-center'>
        <div className='card py-2 px-3'>
          <h3>Welcome to aldo store</h3>
        </div>
      </div>
    </div>
  );
}

function ProtectedPage() {
  return (
    <div>
      <h3 className='card py-2 px-3'>Private Room</h3>
      <img src={img1} alt='Img1' />
      <button className='btnbuy'>BUY</button>
    </div>
  );
}

function Hello() {
  return <h3>hello</h3>;
}

const Private = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <h3 className='card py-2 px-3'>You should login first</h3>
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

//  export default function NestingExample(){
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics() {
//   let {path,url} = useRouteMatch();
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let {topicId} = useParams();

//   return(
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

// export default function ParamsExample(){
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route path="/:id" children={<Child />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child() {
// let {id} = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// export default function BasicExample(){
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
