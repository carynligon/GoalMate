import Backbone from 'backbone';

import Post from '../Models/Post';

export default Backbone.Collection.extend({
  url: ``,
  model: Post,
  newPost: function(post) {
    this.create(post, {success: (data)=>{console.log(data);}})
  }
});
