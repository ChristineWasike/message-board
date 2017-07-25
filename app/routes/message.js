import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('message', params.message_id)
  },
  actions: {
    update(message, params) {
      Object.keys(params).forEach(function (key) {
        if (params[key] !== undefined) {
          message.set(key, params[key]);
        }
      });
      message.save();
      this.transitionTo('message');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var message = params.message;
      params.model.get('answers').addObject(newAnswer);
      newAnswer.save().then(function () {
        return params.model.save();
      });
      this.transitionTo('message', message);
    },
    destroyMessage(message) {
      message.destroyRecord();
      this.transitionTo('message');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('message');
    },
    upVote(answer) {
      var currentUpvote = answer.get('upvote');
      var totalUpvotes = (currentUpvote += 1);
      answer.setProperties({
        upvote: totalUpvotes
      });
      answer.save();
    },
    downVote(answer) {
      var currentDownvote = answer.get('downvote');
      var totalDownvotes = (currentDownvote += 1);
      answer.setProperties({
        downvote: totalDownvotes
      });
      answer.save();
    },
  }
});
