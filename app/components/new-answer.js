import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        response: this.get('response'),
        model: this.get('model'),
        createdDate: new Date().toISOString().substring(0, 10)
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
