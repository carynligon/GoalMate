import React from 'react';
import {Link} from 'react-router';

class UserGroups extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let groups = this.props.groups.map((group,i)=> {
      return (
        <Link to="group" key={i}><li>
          <p>{group}</p>
        </li></Link>
      );
    });
    return (
      <div className="profile-group-wrapper">
        <h5>My Groups:</h5>
        <ul className="profile-group-list">
          {groups}
        </ul>
      </div>
    );
  }
}

export default UserGroups;
