import Ember from 'ember';

export default Ember.ArrayController.extend({
  currentVideo: null,
  showCurrentVideo: false,

  setCurrentVideo(video) {
    this.set('showCurrentVideo', false);
    this.set('currentVideo', video);

    //Doing in this way for force the creation of a new "video" element
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.set('showCurrentVideo', true);
    }, 50);
  },

  actions: {
    closePreview() {
      this.set('showCurrentVideo', false);
    }
  }
});