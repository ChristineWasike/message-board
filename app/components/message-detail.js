import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imagesHide() {
      this.set('isImageShowing', false);
    },
    update(message, params) {
      this.sendAction('update', message, params);
    },
    delete(message) {
      if (confirm('Would you really like to delete this riddle?')) {
        this.sendAction('destroyMessage', message);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
