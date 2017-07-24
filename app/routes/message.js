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
      var message = params.response;
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
    like(message) {
      var currentLikes = message.get('likes')
      var totalLikes = currentLikes += 1
      message.setProperties({
        likes: totalLikes
      });
      message.save();
      this.transitionTo('index')
    },
    dislike(message) {
      var currentDislikes = message.get('dislikes')
      var totalDislikes = currentDislikes += 1
      message.setProperties({
        dislikes: totalDislikes
      })
      message.save();
      this.transitionTo('index')
    }
  }
});
