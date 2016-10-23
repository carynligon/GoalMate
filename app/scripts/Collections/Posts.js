import Backbone from 'backbone';

export default Backbone.Collection.extend({
  url: ``,
  model: Post,
  newPost: function(post) {
    this.create(post, {success: (data)=>{console.log(data);}})
  }
});
