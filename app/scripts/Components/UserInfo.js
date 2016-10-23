import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    return (
      <div className="user-profile-info">
        <div className="user-icon-wrapper">
          <img src="/assets/images/user-icon.png"/>
        </div>
        <div className="user-info">
          <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
          <h4>{this.props.user.city}</h4>
          <p>{this.props.user.bio}</p>
        </div>
      </div>
    );
  }
}

export default UserInfo;
