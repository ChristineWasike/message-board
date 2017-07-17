import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(message) {
      var params = {
        riddle: this.get('riddle'),
        author: this.get('author'),
        hint: this.get('hint'),
        image: this.get('image'),
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    },
    cancelMessageFrom() {
      this.set('updateMessageForm', false);
    }
  }
});
