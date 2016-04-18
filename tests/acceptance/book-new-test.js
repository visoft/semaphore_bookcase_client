import { test } from 'qunit';
import moduleForAcceptance from 'bookcase/tests/helpers/module-for-acceptance';
import { mockCreate } from 'ember-data-factory-guy';

moduleForAcceptance('Acceptance | book new');

test('visiting /book/new', function(assert) {
  visit('/books/new');

  andThen(function() {
    assert.equal(currentURL(), '/books/new');
  });
});

test('can be created', function(assert){
  mockCreate('book');

  visit('/books/new');

  andThen(function() {
    fillIn('.title', 'Ember is Awesome');
    fillIn('.isbn', '0123456789');
    fillIn('.cover', 'http://placehold.it/417x500');
  });

  andThen(function(){
    click('button[type=submit]');
  });

  andThen(function(){
    assert.equal($.mockjax.mockedAjaxCalls()[0].url, '/books');
    assert.equal(currentURL(), '/books/1');
  });
});
