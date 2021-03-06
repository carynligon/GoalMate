import React from 'react';

import Nav from '../Components/Nav';
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
        <Nav/>
        <UserInfo user={this.state.user}/>
        <UserGroups groups={this.state.userGroups}/>
      </main>
    );
  }
}

export default UserProfile;
