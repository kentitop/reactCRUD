import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const hrefIdFormatter = (cell, row) => {
  return `<a href='/patient/${row.id}' >${cell}</a>`;
};



class PatientList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true,
            hideSelectColumn: true
        };
    }




    render() {


        return (
            <BootstrapTable data={this.props.patients}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>

                <TableHeaderColumn
                    dataField="firstName"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                    dataFormat={hrefIdFormatter}
                >
                    First Name
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="lastName"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Last Name
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="email"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Email
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="phone"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Phone
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="birthday"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Birthday
                </TableHeaderColumn>
            </BootstrapTable>
        );
    }

}



PatientList.propTypes = {
    patients: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default PatientList;
