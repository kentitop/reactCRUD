import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';


const selectedPatientReducer = (state = initialState.selectedPatientReducer, action) => {
    switch(action.type) {

        case ActionType.GET_PATIENT_RESPONSE: {
            return {
                ...state,
                patient: _.assign(action.patient)
            };
        }


        default: { return state; }
    }
};


export default selectedPatientReducer;
