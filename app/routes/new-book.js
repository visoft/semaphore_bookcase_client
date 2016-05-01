import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.hash({
      book: this.store.createRecord('book'),
      publishers: this.store.findAll('publisher')
    });
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
