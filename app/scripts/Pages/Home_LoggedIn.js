import React from 'react';

import Nav from '../Components/Nav';
import UserSidebar from '../Components/UserSidebar';
import Feed from '../Components/Feed';

class HomeLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.setState({
      user: {
        first_name: 'Caryn',
        last_name: 'Ligon',
        city: 'Austin, TX'
      },
      userGroups: ['JavaScript', 'Yoga', 'Chinese', 'Cooking', 'JavaScript', 'Yoga', 'Chinese', 'Cooking'],
      userFeed: [
        {
          content: 'Something that will go in the feed!',
          type: 'tip',
          user_id: 'Tom',
          timestamp: new Date()
        },
        {
          content: 'Something that will go in the feed!',
          type: 'event',
          user_id: 'Tommy',
          timestamp: new Date()
        },
        {
          content: 'Something that will go in the feed!',
          user_id: 'Tomison',
          timestamp: new Date()
        },
        {
          content: 'Something that will go in the feed!',
          user_id: 'Tomithy',
          timestamp: new Date()
        }
      ]
    })
  }
  render() {
    return (
      <main>
        <Nav/>
        <UserSidebar user={this.state.user} groups={this.state.userGroups}/>
        <Feed feed={this.state.userFeed}/>
      </main>
    );
  }
}

export default HomeLoggedIn;
