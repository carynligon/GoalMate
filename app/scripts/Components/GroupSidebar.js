import React from 'react';
import {Link} from 'react-router';

class GroupSidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let members = this.props.group.members.map((member,i) => {
      return (<li key={i}><Link to="/user">{member}</Link></li>);
    });
    return (
      <aside>
        <div className="group-icon">
          <Link to="/group"><img src="/assets/images/user-icon.png"/></Link>
        </div>
        <h4>{this.props.group.name}</h4>
        <p>{this.props.group.members.length} Members</p>

        <div className="user-groups">
          <ul>{members}</ul>
        </div>
      </aside>
    );
  }
}

export default GroupSidebar;
