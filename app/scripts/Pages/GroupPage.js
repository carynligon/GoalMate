import React from 'react';

import GroupSidebar from '../Components/GroupSidebar';
import GroupFeed from '../Components/GroupFeed';

class GroupPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      group: {
        name: 'Chinese'
      },
      members: ['Caryn', 'Jess', 'David', 'Kim', 'Carlos'],
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
        <GroupSidebar/>
        <GroupFeed/>
      </main>
    );
  }
}

export default GroupPage;
