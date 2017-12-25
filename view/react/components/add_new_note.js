import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createNote, fetchSubjects } from '../actions';

class AddNewNote extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    this.props.fetchSubjects();
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

  renderTextareaField(field) {
    return (
      <div className="Form-group">
        <label className="Form-label">{field.label}</label>
        <textarea
          rows="17"
          className="Form-control"
          type="text"
          {...field.input}
        ></textarea>
        <p className="Error">
          {field.meta.touched ? field.meta.error : ''}
        </p>
      </div>
    );
  }

  renderSubjects(field) {
    return (
      <div className="Form-group">
        <label className="Form-label">{field.label}</label>
        <select 
          multiple
          {...field.input}
        >
          { _.map(field.subjects, subject => {
            return (
              <option key={subject._id} value={subject._id}>
                {subject.name}
              </option>
            )
          })}
        </select>
        <p className="Error">
          {field.meta.touched ? field.meta.error : ''}
        </p>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createNote(values, () => {
      this.props.history.push('/notes');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="Form AddNewNote" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="name"
          component={this.renderField}
        />

        <Field
          label="Slug"
          name="slug"
          component={this.renderField}
        />
        
        <Field 
          label="Subjects"
          name="subjects"
          component={this.renderSubjects}
          subjects={this.props.subjects}
          className="Form-select"
          type="select-multiple"
        />
        
        <Field
          label="Body"
          name="body"
          component={this.renderTextareaField}
        />
        <button type="submit" className="Form-button">Create Note</button>
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
  if (!values.subjects) {
    errors.subjects = "Choose at least one subject"
  }
  if (!values.body) {
    errors.body = "Enter body content"
  }
  if (!values.slug) {
    errors.slug = "Enter slug"
    //Slug must not contain spaces or special characters"
  }

  var regex = new RegExp(/[^a-z0-9-]/);

  if (values.slug && regex.test(values.slug)) {
    errors.slug = "Slug must not contain spaces or special characters"
  }

  // if errors has *any* properties, redux form assumes form is invalid
  return errors;
}

const mapStateToProps = ({ subjects }) => ({ subjects });

export default reduxForm({
  validate,
  form: 'NotesNewForm'
})(
  connect(mapStateToProps, { fetchSubjects, createNote })(AddNewNote)
);
