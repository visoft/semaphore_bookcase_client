import { test } from 'qunit';
import moduleForAcceptance from 'bookcase/tests/helpers/module-for-acceptance';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

moduleForAcceptance('Acceptance | book list');

test('visiting /books', function(assert) {
  TestHelper.handleFindAll('book', 0);
  visit('/books');

  andThen(function() {
    assert.equal(currentURL(), '/books');
  });
});

test('should show list of books', function(assert) {
  TestHelper.handleFindAll('book', 3);
  visit('/books');

  andThen(function() {
    assert.equal(find('.book').length, 3);
  });
});

test('should filter a list of books', function(assert) {
  TestHelper.handleFindAll('book', {title: 'Book 1'}, {title: 'Book 2'});
  visit('/books');
  fillIn('#filter', '2');

  andThen(function() {
    assert.equal(find('.book').length, 1);
    assert.equal(find('.book').data('title'), 'Book 2');
  });
});

