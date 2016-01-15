import Ember from 'ember';

export default Ember.Component.extend({
  books: [],
  sortKeys: [],
  sortedBooks: Ember.computed.sort('books', 'sortKeys')
});
