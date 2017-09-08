import React, { PropTypes } from 'react';
import toastr from 'toastr';

import MedicineList from './MedicineList';



export class MedicineListContainer extends React.Component {
    render() {
        return(
            <div className="container">
              <h1>Medicines List</h1>

              <MedicineList />
            </div>
        )
    }

}


export default MedicineListContainer;
