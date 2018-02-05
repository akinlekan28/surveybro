import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>

      </div>
    )
  })
  return (
    <div>
      <br />
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <br />
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
      <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>Send Survey <i className="material-icons">email</i></button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));