import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import PatientListContainer from './patient/PatientListContainer';
import AddOrEditPatientContainer from './patient/AddOrEditPatientContainer';
import MedicineListContainer from './medicine/MedicineListContainer';
import MedicineSingle from './medicine/MedicineSingle';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './landing/Header';



const history = createBrowserHistory();


const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={PatientListContainer} />
                        <Route exact path="/patient" component={AddOrEditPatientContainer} />
                        <Route path="/patient/:id" component={AddOrEditPatientContainer} />
                        <Route path="/medicines" component={MedicineListContainer} />
                        <Route path="/medicine/:id" component={MedicineSingle} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>
            </Router>
        </div>
    );
};


export default App;
