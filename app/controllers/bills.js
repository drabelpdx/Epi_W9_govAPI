import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      this.transitionToRoute('bill', this.get('date'));
    }
  }
});
