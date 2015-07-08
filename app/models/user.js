import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  avatar: attr('string'),
  //TODO: Cover photo in HD inserted by hand 
  cover: attr('string')
});