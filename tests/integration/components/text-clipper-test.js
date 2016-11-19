import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('text-clipper', 'Integration | Component | text clipper', {
  integration: true
});

test('it can be expanded and collapsed', function(assert) {
  this.set('text', 'Hello, World!');
  this.render(hbs`{{text-clipper text length=6}}`);

  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, ''), 'Hello...    more');

  this.$('a').click();
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, ''), 'Hello, World!    less');

  this.$('a').click();
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, ''), 'Hello...    more');
});

test('action text can be replaced', function(assert) {
  this.set('text', 'Hello, World!');
  this.render(hbs`{{text-clipper text length=6 expandText="expand" collapseText="collapse"}}`);

  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, ''), 'Hello...    expand');

  this.$('a').click();
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, ''), 'Hello, World!    collapse');
});

test('expansion can be disabled', function(assert) {
  this.set('text', 'Hello, World!');
  this.render(hbs`{{text-clipper text length=6 canExpand=false}}`);
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, ''), 'Hello...');
});
