import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  src: attr('string'),
  cover: attr('string'),
  author: attr('string')
});