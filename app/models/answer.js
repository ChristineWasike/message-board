import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  response: DS.attr(),
  message: DS.belongsTo('message', { async: true}),
});
