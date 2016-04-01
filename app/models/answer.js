import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  solution: DS.belongsTo('post', {async: true })
});
