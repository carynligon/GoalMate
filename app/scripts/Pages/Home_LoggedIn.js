import React from 'react';

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
          comment: 'Something that will go in the feed!',
          type: 'Tip',
          user: 'Tom',
          time: new Date()
        },
        {
          comment: 'Something that will go in the feed!',
          type: 'Event',
          user: 'Tommy',
          time: new Date()
        },
        {
          comment: 'Something that will go in the feed!',
          user: 'Tomison',
          time: new Date()
        },
        {
          comment: 'Something that will go in the feed!',
          user: 'Tomithy',
          time: new Date()
        }
      ]
    })
  }
  render() {
    return (
      <main>
        <UserSidebar user={this.state.user} groups={this.state.userGroups}/>
        <Feed feed={this.state.userFeed}/>
      </main>
    );
  }
}

export default HomeLoggedIn;
