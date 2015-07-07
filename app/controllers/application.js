import Ember from 'ember';

export default Ember.ArrayController.extend({
  currentVideo: null,
  showCurrentVideo: false,

  relatedVideos: Ember.computed('currentVideo', {
    get() {
      let currentVideo = this.get('currentVideo');
      if (!currentVideo) return;

      return this.get('store').all('video').filterBy('user.id', currentVideo.get('user.id')).map(function(video) {
        video.set('isCurrentVideo', video.get('id') === currentVideo.get('id'));
        return video;
      });
    }
  }),

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