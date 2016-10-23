import React from 'react';

import Nav from '../Components/Nav';
import GroupSidebar from '../Components/GroupSidebar';
import Feed from '../Components/Feed';

class GroupPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      group: {
        name: 'Chinese',
        members: ['Caryn', 'Jess', 'David', 'Kim', 'Carlos']
      },
      feed: [
        {
          content: 'I just started a new class on learnchinese.com, you guys should check it out!',
          type: 'tip',
          user_id: 'Tom',
          timestamp: new Date()
        },
        {
          content: 'There\'s a meetup tonight at Capital Factory for intro to learning Chinese. Anybody going?',
          type: 'event',
          user_id: 'Tommy',
          timestamp: new Date()
        },
        {
          content: 'I just found this translator and it seems to be pretty accurate.',
          type: 'tip',
          user_id: 'Tomison',
          timestamp: new Date()
        }
      ]
    });
  }
  render() {
    return (
      <main>
        <Nav/>
        <GroupSidebar group={this.state.group}/>
        <Feed feed={this.state.feed} group={this.state.group} newPosts={true}/>
      </main>
    );
  }
}

export default GroupPage;
