import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('book', 'Unit | Model | book', {
  // Specify the other units that are required for this test.
  needs: ['model:publisher', 'model:author']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it has an attribute: title', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('title') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: isbn', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('isbn') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: cover', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('cover') > -1;
  assert.ok(hasAttr);
});

test('profile relationship', function(assert) {
  var model = this.store().modelFor('book');
  var relationship = Ember.get(model, 'relationshipsByName').get('publisher');

  assert.equal(relationship.key, 'publisher');
  assert.equal(relationship.kind, 'belongsTo');
});

test('authors relationship', function(assert) {
  var model = this.store().modelFor('book');
  var relationship = Ember.get(model, 'relationshipsByName').get('authors');

  assert.equal(relationship.key, 'authors');
  assert.equal(relationship.kind, 'hasMany');
});
