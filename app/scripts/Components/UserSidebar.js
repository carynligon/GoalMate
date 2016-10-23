import React from 'react';
import {Link} from 'react-router';

class UserSidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    let groups = this.props.groups.map((group,i) => {
      return (<li key={i}><Link to="/group">{group}</Link></li>);
    });
    return (
      <aside>
        <div className="user-icon">
          <Link to="/user"><img src="/assets/images/user-icon.png"/></Link>
        </div>
        <h4>{this.props.user.first_name} {this.props.user.last_name}</h4>
        <p>{this.props.user.city}</p>

        <div className="user-groups">
          <ul>{groups}</ul>
        </div>
      </aside>
    );
  }
}

export default UserSidebar;
