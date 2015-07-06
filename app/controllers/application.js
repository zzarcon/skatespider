import Ember from 'ember';

export default Ember.ArrayController.extend({
  currentVideo: null,
  showCurrentVideo: false,

  setCurrentVideo(video) {
    this.set('showCurrentVideo', true);
    this.set('currentVideo', video);
  },

  actions: {
    closePreview() {
      this.set('showCurrentVideo', false);
    }
  }
});