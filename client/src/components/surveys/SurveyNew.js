import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SurveyNew extends Component {
  state = { showFormReview: false }

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })} />;
    }
    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    
    if(!this.props.auth){
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default reduxForm({
  form: 'surveyForm'
})(connect(mapStateToProps)(SurveyNew));