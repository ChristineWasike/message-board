import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    update(message, params) {
      this.sendAction('update', message, params);
    },
    delete(message) {
      if (confirm("Please don't delete me")) {
        this.sendAction('destroyMessage', message);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
