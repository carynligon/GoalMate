import React from 'react';

class UserGroups extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let groups = this.props.groups.map((group,i)=> {
      return (
        <li key={i}>
          <p>{group}</p>
        </li>
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
