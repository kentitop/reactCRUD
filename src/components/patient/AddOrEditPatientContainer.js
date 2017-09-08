import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as patientAction from '../../action/PatientAction';
import PatientForm from './PatientForm';


export class AddOrEditPatientContainer extends React.Component {

    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        this.props.action.getPatientAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });
    }



    handleSave(values) {
        const patient = {
            id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            birthday: values.birthday
        };

        this.props.action.savePatientAction(patient)
            .then(() => {
                toastr.success('Patient saved');
                this.props.history.push('/');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/');
    }



    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        return (
            <div className="container">
                <PatientForm
                    heading={heading}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const patientId = ownProps.match.params.id; //from the path '/patient/:id'

    if (patientId && state.selectedPatientReducer.patient && patientId === state.selectedPatientReducer.patient.id) {
        return {
            initialValues: state.selectedPatientReducer.patient,
        };
    } else {
        return {

        };
    }
};



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...patientAction }, dispatch)
});



AddOrEditPatientContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditPatientContainer);
