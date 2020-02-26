import React from "react";
import "./StateFullLogin.css";

class StateFullLogin extends React.Component {
  render() {
    return (
      <form>
        <h1>Form Login</h1>

        <div class="border">
          <p class="judul">Tugas Pertemuan Ketiga</p>
          <br />
          <br />
          <label>Username </label>
          <input
            type="text"
            name="username"
            class="form_login"
            placeholder="Masukkan Username Anda"
          />
          <label>Password </label>
          <input
            type="text"
            name="password"
            class="form_login"
            placeholder="Masukkan Password Anda"
          />
          <br />
          
          <input type="submit" class="login" value="Login" />
          <input type="checkbox" class="rememberme" value="Remember Me" /> Remember Me

          <br />
          <br />
          <center>
            <input type="submit" class="cancel" value="Cancel" />
          </center>
        </div>
      </form>
    );
  }
}

export default StateFullLogin;
