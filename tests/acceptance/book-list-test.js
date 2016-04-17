import { test } from 'qunit';
import moduleForAcceptance from 'bookcase/tests/helpers/module-for-acceptance';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

moduleForAcceptance('Acceptance | book list');

test('visiting /books', function(assert) {
  TestHelper.mockFindAll('book', 0);
  visit('/books');

  andThen(function() {
    assert.equal(currentURL(), '/books');
  });
});

test('should show list of books', function(assert) {
  TestHelper.mockFindAll('book', 3);
  visit('/books');

  andThen(function() {
    assert.equal(find('.book').length, 3);
  });
});

test('should filter a list of books', function(assert) {
  TestHelper.mockFindAll('book', {title: 'Book 1'}, {title: 'Book 2'});
  visit('/books');
  fillIn('#filter', '2');

  andThen(function() {
    assert.equal(find('.book').length, 1);
    assert.equal(find('.book').data('title'), 'Book 2');
  });
});

test('should sort a list of books ascending by default', function(assert) {
  TestHelper.mockFindAll('book', {title: 'Book 2'}, {title: 'Book 1'});
  visit('/books');

  andThen(function() {
    assert.equal(find('.book:eq(0)').data('title'), 'Book 1');
    assert.equal(find('.book:eq(1)').data('title'), 'Book 2');
  });
});

test('should sort a list of books descending when selected', function(assert) {
  TestHelper.mockFindAll('book', {title: 'Book 1'}, {title: 'Book 2'});
  visit('/books');
  click('#descending');

  andThen(function() {
    assert.equal(find('.book:eq(0)').data('title'), 'Book 2');
    assert.equal(find('.book:eq(1)').data('title'), 'Book 1');
  });
});

test('should sort a list of books ascending when selected', function(assert) {
  TestHelper.mockFindAll('book', {title: 'Book 2'}, {title: 'Book 1'});
  visit('/books');
  click('#descending'); // Sort descending because of the default sort
  click('#ascending');

  andThen(function() {
    assert.equal(find('.book:eq(0)').data('title'), 'Book 1');
    assert.equal(find('.book:eq(1)').data('title'), 'Book 2');
  });
});

