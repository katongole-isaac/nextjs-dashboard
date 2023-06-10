/**
 * Form Component
 * For Components that inhert the Form should
 *
 *   Have
 *   - state: { data: {} , errors: {} }
 *   - schema : yup or other validation schemas
 */

import React, { Component } from "react";
import _ from "lodash";

import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateOnChange = ({ name, value }) => {
    let errors = {};

    try {
      this.schema.validateSyncAt(name, { [name]: value });

      delete errors[name];
      // errors = {};
    } catch (error) {
      errors[error.path] = error.message;
    }

    return {
      errors,
    };
  };

  validate = (data) => {
    const options = { abortEarly: false };
    let errors = {};
    let result = {};

    try {
      result = this.schema.validateSync(data, options);
    } catch (ex) {
      for (let error of ex.inner) {
        errors[error.path] = error.message;
      }
    }

    return {
      result,
      errors,
    };
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };

    const { errors } = this.validateOnChange(input);

    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { errors, result } = this.validate(this.state.data);

    if (!_.isEmpty(errors)) return this.setState({ errors });

    this.setState({ errors: {} });

    this.submitForm(result);
  };

  renderInput(name, label, type) {
    const { data, errors } = this.state;

    return (
      <Input
        label={label}
        value={data[name]}
        name={name}
        type={type}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderButton(label) {
    return (
      <button
        className="btn-sm btn btn-primary mt-2"
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    );
  }
}

export default Form;
