import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sandboxes', function() {
    this.route('sandbox', { path: '/:sandbox_id' });
  });
});

export default Router;
