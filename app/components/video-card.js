import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['video-card'],
  video: null,
  action: 'setCurrentVideo',

  mouseEnter() {
    this.$('video')[0].play();
  },

  mouseLeave() {
    this.pause();
  },

  pause() {
    let video = this.$('video')[0];

    video.pause();
    video.currentTime = 0;
  },

  click() {
    this.pause();
    this.sendAction('action', this.get('video'));
  }
});