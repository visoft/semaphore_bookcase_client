import { test } from 'qunit';
import moduleForAcceptance from 'bookcase/tests/helpers/module-for-acceptance';
import { make, mockFind, mockDelete, mockFindAll } from 'ember-data-factory-guy';

moduleForAcceptance('Acceptance | book delete');

test('can be deleted', function(assert){
  let book = make('book', { id: 1 });
  mockFind('book', book);
  mockDelete('book', 1);

  mockFindAll('book');

  visit('/books/1');

  andThen(function() {
    click('.btn-danger');
  });

  andThen(function(){
    assert.equal($.mockjax.mockedAjaxCalls()[1].url, '/books/1');
    assert.equal($.mockjax.mockedAjaxCalls()[1].type, 'DELETE');
    assert.equal(currentURL(), '/books');
  });
});
