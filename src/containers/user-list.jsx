import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from '../actions/index'


class UserList extends Component {



    filterList() {
        if (this.props.word && this.props.word.length > 2) {
            const reg = new RegExp(this.props.word, "i")
            return this.props.users.filter((user) => reg.test(user.name));
        }
        return this.props.users;

    }

    renderList() {

        return this.filterList().map((user) => {
            return (
                <li
                    className="list-group-item"
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.name}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users.liste,
        word: state.word
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);