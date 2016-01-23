import Ember from 'ember';

export default Ember.Component.extend({
  books: [],
  sortKeys: ['title'],
  filter: '',

  sortedBooks: Ember.computed.sort('books', 'sortKeys'),

  filteredBooks: Ember.computed.filter('sortedBooks', function(book) {
    var title = book.get('title').toLowerCase();
    return title.indexOf(this.get('filter')) !== -1;
  }).property('sortedBooks', 'filter'),

  actions: {
    sortBy: function(sort) {
      this.set('sortKeys', [sort]);
    }
  }
});
