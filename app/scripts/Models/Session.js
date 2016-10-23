import Backbone from 'backbone';
import {browserHistory} from 'react-router';

import store from '../store';

const Session = Backbone.Model.extend({
  urlRoot: `/login`,
  logout: function() {
    this.save(null, {
      url: `/logout`});
    this.clear();
    localStorage.clear();
    browserHistory.push('/');
  },
  signup: function(info) {
  return new Promise((resolve, reject) => {
    localStorage.clear();
    store.users.create({
      email,
      password
    }, {
      success: function(response) {
        response.unset('password');
        store.session.set({
          email
        });
        resolve(response);
      },
      error: function(response) {
        resolve();
      }
    });
  })
},
})

export default Session;
