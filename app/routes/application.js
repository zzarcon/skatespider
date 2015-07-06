import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    setCurrentVideo(video) {
      this.controllerFor('application').setCurrentVideo(video);
    }
  }
});