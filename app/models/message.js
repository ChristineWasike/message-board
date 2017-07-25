import DS from 'ember-data';

export default DS.Model.extend({
  riddle: DS.attr(),
  author: DS.attr(),
  hint: DS.attr(),
  image: DS.attr(),
  createDate: DS.attr(),
  upvote: DS.attr('number'),
  downvote: DS.attr('number'),
  answers: DS.hasMany('answer', { async: true })
});
