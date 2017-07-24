import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      messages: this.store.findAll('message'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveMessage(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    }
  }
});
