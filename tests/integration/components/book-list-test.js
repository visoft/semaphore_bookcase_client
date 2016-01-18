import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import FactoryGuy from 'ember-data-factory-guy';
import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App = null;

moduleForComponent('book-list', 'Integration | Component | book list', {
  integration: true,

  setup: function () {
    Ember.run(function () {
      App = startApp();
    });
  },

  teardown: function () {
    Ember.run(App,'destroy');
  }
});

test('it renders a list of books', function(assert) {
  this.set('books', FactoryGuy.makeList('book', 2));
  this.render(hbs`{{book-list books=books}}`);

  assert.equal(this.$('.book').length, 2);
});

test('it orders a list of books by title', function(assert){
  assert.expect(2);
  var book1 = FactoryGuy.make('book', { title: 'Book 1' });
  var book2 = FactoryGuy.make('book', { title: 'Book 2' });

  this.set('books', [book2, book1]);
  this.set('sortKeys', ['title']);
  this.render(hbs`{{book-list books=books sortKeys=sortKeys}}`);

  assert.equal(this.$('.book').text(), "Book 1Book 2");

  this.set('sortKeys', ['title:desc']);
  assert.equal(this.$('.book').text(), "Book 2Book 1");
});

test('it filters a list of books by title', function(assert) {
  var book1 = FactoryGuy.make('book', { title: 'Book 1' });
  var book2 = FactoryGuy.make('book', { title: 'Book 2' });

  this.set('books', [book1, book2]);
  this.set('filter', '1');
  this.render(hbs`{{book-list books=books filter=filter}}`);

  assert.equal(this.$('.book').text(), "Book 1");
});

