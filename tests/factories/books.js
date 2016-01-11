import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('book', {
  sequences: {
    bookTitle: function(num) {
      return 'Book ' + num;
    }
  },

  default: {
    title: FactoryGuy.generate('bookTitle'),
    isbn: '0123456789',
    cover: 'http://placehold.it/150x200'
  }
});
