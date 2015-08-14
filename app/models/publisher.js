import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  validations: {
    name: {
      presence: true,
      length: 5
    }
  },
  name: DS.attr('string'),
  books: DS.hasMany('book')
});
