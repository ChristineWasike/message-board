import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
      console.log('upvote');
    },

    downVote(answer) {
      this.sendAction('downVote', answer);
      console.log('downvote');
    }


  }
});
