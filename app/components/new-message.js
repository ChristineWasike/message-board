import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },
    saveMessage1() {
      var params = {
        riddle: this.get('riddle'),
        author: this.get('author'),
        hint: this.get('hint'),
        image:  this.get('image'),
      };
      this.set('addNewMessage', false);
      this.set('saveMessage2', params);
    }
  }
});
