import Ember from 'ember';

export default Ember.Component.extend({
  books: [],
  sortKeys: [],
  filter: '',

  sortedBooks: Ember.computed.sort('books', 'sortKeys'),

  filteredBooks: Ember.computed.filter('sortedBooks', function(book) {
    var title = book.get('title').toLowerCase();
    return title.indexOf(this.get('filter')) !== -1;
  }).property('sortedBooks', 'filter')
});
