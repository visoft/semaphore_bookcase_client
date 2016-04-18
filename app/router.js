import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books');
  this.route('new-book', { path: '/books/new' });
  this.route('book', { path: '/books/:id'});
});

export default Router;
