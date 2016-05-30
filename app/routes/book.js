import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('book', params.id);
  },
  actions: {
    delete(book) {
      book.destroyRecord()
        .then(() => {
          this.transitionTo('books');
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
