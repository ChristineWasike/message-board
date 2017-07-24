import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        response: this.get('response'),
        model: this.get('model'),
        upvote: 0,
        downvote:0
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
