import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import patientsReducer from './patientsReducer';
import selectedPatientReducer from './selectedPatientReducer';
import apiReducer from './apiReducer';
import { items, itemsHasErrored, itemsIsLoading } from './medicineReducer';


export default combineReducers({
    patientsReducer,
    selectedPatientReducer,
    apiReducer,
    items,
    itemsHasErrored,
    itemsIsLoading,
    form: formReducer,
});


