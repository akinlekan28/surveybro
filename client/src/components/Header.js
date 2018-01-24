import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">SurveyBro</Link>
          {this.props.auth ?
            <ul className="right">
              <li><a href="/api/logout">Logout</a></li>
            </ul>
            :
            <ul className="right">
              <li><Link to="/signup">Sign Up</Link></li>
              <li><a href="/auth/google">Login with google</a></li>
            </ul>
          }

        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);