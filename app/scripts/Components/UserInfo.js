import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <img src="/assets/images/user-icon.png"/>
        <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
        <h4>{this.props.user.city}</h4>
        <p>{this.props.user.bio}</p>
      </div>
    );
  }
}

export default UserInfo;
