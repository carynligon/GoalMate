import React from 'react';

import UserSidebar from '../Components/UserSidebar';
import Feed from '../Components/Feed';

class HomeLoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <UserSidebar/>
        <Feed/>
      </main>
    );
  }
}

export default HomeLoggedIn;
