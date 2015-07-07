import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['size'],
  classNames: ['video-card'],

  size: 'medium',
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