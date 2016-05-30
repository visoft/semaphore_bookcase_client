import { test } from 'qunit';
import moduleForAcceptance from 'bookcase/tests/helpers/module-for-acceptance';
import { make, mockFind, mockUpdate, mockFindAll } from 'ember-data-factory-guy';

moduleForAcceptance('Acceptance | book update');

test('visiting /book/1/update', function(assert) {
  mockFindAll('publisher', 2);
  mockFind('book', { id: 1 });

  visit('/books/1/update');

  andThen(function() {
    assert.equal(currentURL(), '/books/1/update');
  });
});

test('can be updated', function(assert){
  mockFindAll('publisher', 2);
  let book = make('book', { id: 1 });
  mockFind('book', book);
  mockUpdate(book);

  visit('/books/1/update');

  andThen(function() {
    fillIn('.title', 'Ember is Awesome');
    fillIn('.isbn', '0123456789');
    selectChoose('.publisher', 'Publisher 2');
    fillIn('.cover', 'http://placehold.it/417x500');
  });

  andThen(function(){
    click('button[type=submit]');
  });

  andThen(function(){
    assert.equal($.mockjax.mockedAjaxCalls()[1].url, '/books/1');
    assert.equal(currentURL(), '/books/1');
  });
});

