import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createSubject } from '../actions';

class AddNewSubject extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  renderField(field) {
    return (
      <div className="Form-group">
        <label className="Form-label">{field.label}</label>
        <input
          className="Form-control"
          type="text"
          {...field.input}
        />
        <p className="Error">
          {field.meta.touched ? field.meta.error : ''}
        </p>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createSubject(values, () => {
      this.props.history.push('/notes');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="Form AddNewSubject" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Subject"
          name="name"
          component={this.renderField}
        />

        <button type="submit" className="Form-button">Create Subject</button>
        <button onClick={this.context.router.history.goBack} className="Form-button">Cancel</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {}

  if (!values.name) {
    errors.name = "Enter a name"
  }
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'SubjectsNewForm'
})(
  connect(null, { createSubject })(AddNewSubject)
);
