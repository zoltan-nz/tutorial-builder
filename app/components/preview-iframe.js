import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'iframe',
  classNames: ['preview-iframe'],

  attributeBindings: ['sandbox', 'srcdoc', 'width', 'height'],

  srcdoc: '',
  sandbox: 'allow-same-origin allow-scripts allow-forms allow-modals',

  width: '100%',
  height: '100%'

});
