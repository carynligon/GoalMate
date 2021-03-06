import React from 'react';
import {Link} from 'react-router';

import Modal from './Modal';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dropdown: false, showModal: false};
  }
  dropdown() {
    this.setState({dropdown: !this.state.dropdown});
  }
  showModal() {
    this.setState({showModal: true});
  }
  closeModal() {
    this.setState({showModal: false});
  }
  render() {
    console.log(this.state);
    let dropdown;
    if (this.state.dropdown) {
      dropdown = (
        <ul className="nav-dropdown">
          <Link to="user"><li>Profile</li></Link>
          <li onClick={this.showModal.bind(this)}>Add Goal</li>
          <Link to="settings"><li>Settings</li></Link>
          <li>Logout</li>
        </ul>
      );
    }
    let modal;
    if (this.state.showModal) {
      modal = <Modal method="add-goal" closeModal={this.closeModal.bind(this)}/>
    }
    return (
      <nav>
        <Link to="/"><img src="/assets/images/logo.png"/><h4><span>Goal</span>Mate</h4></Link>
        <i className="fa fa-user user-icon" aria-hidden="true" onClick={this.dropdown.bind(this)}></i>
        {dropdown}
        {modal}
      </nav>
    );
  }
}

export default Nav;
