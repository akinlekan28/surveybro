import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';

class Header extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo left" style={{fontSize: '17px'}}>SurveyBro</Link>
          {this.props.auth ?
            <ul className="right">
              <li><Stripe /></li>
              <li style={{margin: '0 10px'}}><a>Credits: {this.props.auth.credits}</a></li>
              <li><a href="/api/logout">Logout</a></li>
            </ul>
            :
            <ul className="right">
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