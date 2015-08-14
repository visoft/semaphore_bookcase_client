import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  validations: {
    name: {
      presence: true
    }
  },
  name: DS.attr('string'),
  books: DS.hasMany('book', { async: true })
});
