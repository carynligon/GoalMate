import Backbone from 'backbone';

import User from '../Models/User';

export default Backbone.Collection.extend({
  url: `/users`,
  model: User
});
