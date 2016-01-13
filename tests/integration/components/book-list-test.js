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
