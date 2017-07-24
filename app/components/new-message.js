import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveMessage() {
      var params = {
        riddle: this.get('riddle'),
        author: this.get('author'),
        hint: this.get('hint'),
        image:  this.get('image'),
      };
      this.sendAction('saveMessage', params);
    }
  }
});
