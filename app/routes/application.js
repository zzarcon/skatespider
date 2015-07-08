import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    let users = this.get('store').find('user');
    let videos = this.get('store').find('video');

    return Ember.RSVP.all([users, videos]);
  },

  actions: {
    setCurrentVideo(video) {
      this.controllerFor('application').setCurrentVideo(video);
    }
  }
});