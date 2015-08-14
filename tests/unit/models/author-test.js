import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('author', 'Unit | Model | author', {
  // Specify the other units that are required for this test.
  needs: ['model:book', 'ember-validations@validator:local/presence']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it has an attribute: name', function(assert) {
  var model = this.subject();
  var hasAttr = Object.keys(model.toJSON()).indexOf('name') > -1;
  assert.ok(hasAttr);
});

test('books relationship', function(assert) {
  var model = this.store().modelFor('author');
  var relationship = Ember.get(model, 'relationshipsByName').get('books');

  assert.equal(relationship.key, 'books');
  assert.equal(relationship.kind, 'hasMany');
});

test('name should be required', function(assert){
  var model = this.subject();
  Ember.run(function(){
    model.set('name', '');
  });
  assert.equal(model.get('isValid'), false, 'Object is valid without a name');
});
