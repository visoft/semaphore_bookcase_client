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