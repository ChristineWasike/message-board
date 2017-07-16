import DS from 'ember-data';

export default DS.Model.extend({
  riddle: DS.attr(),
  author: DS.attr(),
  hint: DS.attr(),
  image: DS.attr(),
  messages: DS hasMany('answer', {
    async: true
  })
});
