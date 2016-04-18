import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('book');
  },
  actions: {
    save: function(model) {
      model.save()
      .then((book) => {
        this.transitionTo('book', book);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
});
