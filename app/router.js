import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('tags');
  this.route('users');
  this.route('user', {path: '/user:user_id'});
});

export default Router;
