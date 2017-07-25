import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var message = params[0];

  if (message.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<i class="fa fa-users macho" aria-hidden="true" title="So many guesses"></i>');
  } 
}

export default Ember.Helper.helper(questionPopularity);
