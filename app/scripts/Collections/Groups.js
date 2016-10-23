import Backbone from 'backbone';

export default Backbone.Collection.extend({
  url: ``,
  model: Group,
  newGoal: function(goal) {
    this.create(goal, {success: (data) => {console.log(data);}});
  }
});
