import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
    validations: {
    title: {
      presence: true,
    },
    isbn: {
      presence: true,
      length: 10
    },
    cover: {
      presence: true
    }
  },
  title: DS.attr('string'),
  isbn: DS.attr('string'),
  cover: DS.attr('string'),
  publisher: DS.belongsTo('publisher'),
  authors: DS.hasMany('author', { async: true })
});
