import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='error'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  }

  onFormSubmit(formValues) {
    
  }

  render() {
    return (
      <form className="ui form error"
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field
          name="title"
          component={this.renderInput}
          label='Enter Title'
        />
        <Field
          name="description"
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

//export default StreamCreate;

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);