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
          content: 'Something to go in the feed here',
          type: 'tip',
          timestamp: new Date()
        },
        {
          content: 'Something to go in the feed here',
          type: 'event',
          timestamp: new Date()
        },
        {
          content: 'Something to go in the feed here',
          type: 'tip',
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
        <Feed feed={this.state.feed} newPosts={true}/>
      </main>
    );
  }
}

export default GroupPage;
