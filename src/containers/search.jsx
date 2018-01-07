import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchUser } from '../actions/index'

class Search extends Component {

    constructor() {
        super();
        this.handleKeyUp = this.keyUpHandler.bind(this);
    }


    keyUpHandler(e) {
        this.props.searchUser(e.target.value.trim())
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <input value={this.props.word} onChange={this.handleKeyUp} className="form-control" placeholder="search an user" type="text" />
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        word: state.word
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ searchUser }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Search);