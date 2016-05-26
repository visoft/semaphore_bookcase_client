import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('publisher', {
  sequences: {
    publisherName: function(num) {
      return 'Publisher ' + num;
    }
  },
  default: {
    name: FactoryGuy.generate('publisherName'),
  }
});