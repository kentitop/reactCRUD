import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';


export const PatientForm = ({ handleSubmit, pristine, reset, submitting, heading, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                component={FieldInput}
            />


            <Field
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                component={FieldInput}
            />

            <Field
                type="text"
                name="email"
                label="Email"
                placeholder="Email"
                component={FieldInput}
            />

            <Field
                type="text"
                name="phone"
                label="Phone"
                placeholder="Phone"
                component={FieldInput}
            />

            <Field
                type="date"
                name="birthday"
                label="Birthday"
                placeholder="Birthday"
                component={FieldInput}
            />


            <div className="btn-group">
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-reset">Clear Values</button>}

                <button type="button" className="btn btn-default btn-cancel" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    }

    if (!values.birthday) {
        errors.birthday = 'Required';
    }

    return errors;
};



PatientForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'PatientForm',
    validate
})(PatientForm);
