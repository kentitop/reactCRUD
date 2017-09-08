import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../action/MedicineAction';

class MedicineList extends Component {
    componentDidMount() {
        this.props.fetchData('https://fest-searcher.herokuapp.com/api/fest/s/panodil');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul className="medicine--list">
                {this.props.items.map((item) => (
                    <li key={item._id}>
                        <label>{item.productName}</label>
                        <p>{item.substanceName}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

MedicineList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicineList);
