import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['video-card'],
  video: null,

  mouseEnter() {
    this.$('video')[0].play();
  },

  mouseLeave() {
    let video = this.$('video')[0];

    video.pause();
    video.currentTime = 0;
  }
});