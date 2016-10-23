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
          content: 'Codecademy just launched a new React class!',
          type: 'tip',
          user_id: 'Tom',
          timestamp: new Date()
        },
        {
          content: 'Is anybody going to the free yoga class at Whole Foods tonight?',
          type: 'event',
          user_id: 'Tommy',
          timestamp: new Date()
        },
        {
          content: 'Tomison just joined the Cooking group!',
          user_id: 'Tomison',
          timestamp: new Date()
        },
        {
          content: 'Tomithy just joined the Yoga group!',
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
