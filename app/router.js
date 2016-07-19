import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sandboxes', function() {
    this.route('sandbox', { path: '/:sandbox_id' });
  });
  this.route('admin', function() {
    this.route('tutorial', { path: '/tutorial/:tutorial_id' }, function() {
      this.route('lesson', { path: '/lesson/:lesson_id' });
    });
  });
});

export default Router;
