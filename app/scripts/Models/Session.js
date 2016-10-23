import Backbone from 'backbone';
import {browserHistory} from 'react-router';

import store from '../store';

const Session = Backbone.Model.extend({
  urlRoot: ``,
  logout: function() {
    this.save(null, {
      url: ``});
    this.clear();
    localStorage.clear();
    browserHistory.push('/');
  },
  signup: function(email, password) {
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
