import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Spinner from '../common/Spinner';


export const HeaderNavContainer = ({apiCallsInProgress}) => {
    return (
        <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">

                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav">
                        <li>
                            <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item nav-link" activeClassName="active" to="/medicines" >Medicines</NavLink>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};




HeaderNavContainer.propTypes = {
    apiCallsInProgress: PropTypes.number.isRequired
};



const mapStateToProps = state => ({
    apiCallsInProgress: state.apiReducer.apiCallsInProgress
});



export default connect(mapStateToProps)(HeaderNavContainer);

