import React from 'react';

import UserInfo from '../Components/UserInfo';
import UserGroups from '../Components/UserGroups';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.setState({
      user: {
        first_name: 'Caryn',
        last_name: 'Ligon',
        city: 'Austin, TX',
        bio: 'Hi, I\'m Caryn'
      },
      userGroups: ['JavaScript', 'Yoga', 'Chinese', 'Cooking', 'JavaScript', 'Yoga', 'Chinese', 'Cooking']
    })
  }
  render() {
    return (
      <main>
        <UserInfo user={this.state.user}/>
        <UserGroups user={this.state.userGroups}/>
      </main>
    );
  }
}

export default UserProfile;
