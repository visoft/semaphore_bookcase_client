import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isbn: DS.attr('string'),
  cover: DS.attr('string'),
  publisher: DS.belongsTo('publisher'),
  authors: DS.hasMany('author', { async: true })
});
