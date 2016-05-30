import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return new Ember.RSVP.hash({
      book: this.store.findRecord('book', params.id),
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
