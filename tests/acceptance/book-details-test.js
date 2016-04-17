import { test } from 'qunit';
import moduleForAcceptance from 'bookcase/tests/helpers/module-for-acceptance';
import { mockFind, make } from 'ember-data-factory-guy';

moduleForAcceptance('Acceptance | book details');

test('visiting /books/1', function(assert) {
  mockFind('book', { id: 1 });
  visit('/books/1');

  andThen(function() {
    assert.equal(currentURL(), '/books/1');
  });
});

test('should show all of the book\'s information', function(assert){
  let publisher = make('publisher', {name: 'Acme, Inc.'});
  let author = make('author', {name: 'Damien White'});
  mockFind('book', { id: 1, title: 'Developing Foo', isbn: '0123456789', publisher: publisher, authors: [author] });
  visit('/books/1');
  andThen(function() {
    assert.equal(find('.title').text(), 'Developing Foo');
    assert.equal(find('.isbn').text(), '0123456789');
    assert.equal(find('.publisher').text(), 'Acme, Inc.');
    assert.equal(find('.author').text(), 'Damien White');
  });
});
