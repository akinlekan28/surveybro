import React from 'react';

const Landing = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h2>SurveyBro!</h2>
      <p>Is here to help you collect surveys seamlessly from your users.</p>

      <br />
      <div className="row">
        <div className="col s12">
          <div className="col s6">
            <div className="input-field s6">
              <input id="email" type="email" className="validate" placeholder="Email" />
            </div>
            <div className="input-field s6">
              <input id="password" type="password" className="validate" placeholder="Password" />
            </div>
            <button type="submit" className="waves-effect waves-light btn" >Login</button>
          </div>

          <div className="col s6">
            {/* <a href="/auth/google">Login with google</a> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Landing;