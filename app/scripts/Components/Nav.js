import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dropdown: false};
  }
  dropdown() {
    this.setState({dropdown: !this.state.dropdown});
  }
  render() {
    console.log(this.state);
    let dropdown;
    if (this.state.dropdown) {
      dropdown = (
        <ul className="nav-dropdown">
          <li>Profile</li>
          <li>Add Goal</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      );
    }
    return (
      <nav>
        <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
        <i className="fa fa-user user-icon" aria-hidden="true" onClick={this.dropdown.bind(this)}></i>
        {dropdown}
      </nav>
    );
  }
}

export default Nav;
