import * as ActionType from './ActionType';
import PatientApi from '../api/PatientApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';



export const getPatientsResponse = patients => ({
    type: ActionType.GET_PATIENTS_RESPONSE,
    patients
});



export function getPatientsAction() {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return PatientApi.getAllPatients()
            .then(patients => {
                dispatch(getPatientsResponse(patients));
            }).catch(error => {
                throw error;
            });
    };
}



export const addNewPatientResponse = () => ({
    type: ActionType.ADD_NEW_PATIENT_RESPONSE
});



export const updateExistingPatientResponse = () => ({
    type: ActionType.UPDATE_EXISTING_PATIENT_RESPONSE
});



export function savePatientAction(patientBeingAddedOrEdited) {
    return function (dispatch) {

        dispatch(ApiCallBeginAction());

        // check if the patient already exist or not
        return PatientApi.savePatient(patientBeingAddedOrEdited)
            .then(() => {
                if (patientBeingAddedOrEdited.id) {
                    dispatch(updateExistingPatientResponse());
                } else {
                    dispatch(addNewPatientResponse());
                }
            }).then(() => {
                dispatch(getPatientsAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
    };
}



export const getPatientResponse = patientFound => ({
    type: ActionType.GET_PATIENT_RESPONSE,
    patient: patientFound
});



export function getPatientAction(patientId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return PatientApi.getPatient(patientId)
            .then(patient => {
                dispatch(getPatientResponse(patient));
            }).catch(error => {
                throw error;
            });
    };
}



export const deletePatientResponse = () => ({
    type: ActionType.DELETE_PATIENT_RESPONSE
});



export function deletePatientAction(patientId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return PatientApi.deletePatient(patientId)
            .then(() => {
                dispatch(deletePatientResponse());
            }).then(() => {
                dispatch(getPatientsAction());
            }).catch(error => {
                throw error;
            });
    };
}
