import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Biodata
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </header>

      <content className="App-content">
        <div class="container">

          <p className="Font">B I O D A T A</p>
          
          <table  width="745" border="0" cellspacing="0" cellpadding="5" align="center">
          
            <tr align="center" bgcolor="#66CC33"></tr>
            <tr>
              <td rowspan="10" align="center">
                <img src={require("./asset/a.jpeg")} width="685" height="921"></img>
              </td>
              <td>Nama </td>
              <td> : </td>
              <td>Geraldo Bintang I</td>
            </tr>
            <tr>
              <td>TTL </td>
              <td> : </td>
              <td>Malang 4 Sep 1998</td>
            </tr>
            <tr>
              <td>Jenis Kelamin </td>
              <td> : </td>
              <td>Laki - Laki</td>
            </tr>
            <tr>
              <td>Alamat </td>
              <td> : </td>
              <td>Jl.Raya Ampeldento</td>
            </tr>
            <tr>
              <td>Status </td>
              <td> : </td>
              <td>Mahasiswa</td>
            </tr>
            <tr>
              <td>Hobi </td>
              <td> : </td>
              <td>Volley</td>
            </tr>
            <tr>
              <td>Email </td>
              <td> : </td>
              <td>geraldoarema87@gmail.com</td>
            </tr>
            <tr>
              <td>Github </td>
              <td> : </td>
              <td>geraldoarema
              </td>
            </tr>
          </table>
        </div>
      </content>

      <footer className="App-footer">geraldoarema87@gmail.com</footer>
    </div>
  );
}

export default App;
