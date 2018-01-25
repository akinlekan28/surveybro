import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';

class Header extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">SurveyBro</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">-</i></a>
          {this.props.auth ?
            <ul className="right hide-on-med-and-down">
              <li><Stripe /></li>
              <li style={{margin: '0 10px'}}><a>Credits: {this.props.auth.credits}</a></li>
              <li><a href="/api/logout">Logout</a></li>
            </ul>
            :
            <ul className="right hide-on-med-and-down">
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