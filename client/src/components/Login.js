import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="input-field s6">
              <input id="email" type="email" className="validate" placeholder="Email"/>
            </div>
            <div className="input-field s6">
              <input id="password" type="password" className="validate" placeholder="Password" />
            </div>
          </div>
        </div>
      </div>
          )
  }
}

export default Login;