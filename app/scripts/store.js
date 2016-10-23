import Users from './Collections/Users';
import Groups from './Collections/Groups';
import Posts from './Collections/Posts';

import Session from './Models/Session';

export default {
  users: new Users(),
  session: new Session(),
  groups: new Groups(),
  posts: new Posts()
}
