import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('book', 'Unit | Model | book', {
  // Specify the other units that are required for this test.
  needs: ['model:publisher', 'model:author', 'ember-validations@validator:local/presence', 'ember-validations@validator:local/length']
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

test('title should be required', function(assert){
  var model = this.subject();
  Ember.run(function(){
    model.set('title', '');
  });
  assert.equal(model.get('isValid'), false, 'Object is valid without a title');
});

test('isbn should be required', function(assert){
  var model = this.subject();
  Ember.run(function(){
    model.set('isbn', '');
  });
  assert.equal(model.get('isValid'), false, 'Object is valid without an isbn');
});

test('cover should be required', function(assert){
  var model = this.subject();
  Ember.run(function(){
    model.set('cover', '');
  });
  assert.equal(model.get('isValid'), false, 'Object is valid without a cover');
});

test('isbn should be at least 10 characters long', function(assert){
  var model = this.subject();
  Ember.run(function(){
    model.set('isbn', '012345678');
  });
  assert.equal(model.get('isValid'), false, 'Object is valid with a short isbn number');
});
