import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import {connect} from 'react-redux';

class Dashboard extends Component {
  render(){
    if(!this.props.auth) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="container">
        <SurveyList />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Dashboard);