import Ember from 'ember';

export default Ember.Controller.extend({
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Duo enim genera quae erant, fecit tria. Multoque hoc melius nos veriusque quam Stoici. Quod si ita se habeat, non possit beatam praestare vitam sapientia. Rhetorice     igitur, inquam, nos mavis quam dialectice disputare?

  Quicquid porro animo cernimus, id omne oritur a sensibus; Neque solum ea communia, verum etiam paria esse dixerunt. Ita relinquet duas, de quibus etiam atque etiam consideret. Neque solum ea communia, verum etiam paria esse dixerunt. Immo videri fortasse. Equidem etiam Epicurum, in physicis quidem, Democriteum puto.`,

  html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Duo enim genera quae erant, fecit tria. <i>Multoque hoc melius nos veriusque quam Stoici.</i> Quod si ita se habeat, non possit beatam praestare vitam sapientia. Rhetorice     igitur, inquam, nos mavis quam dialectice disputare?</p>

  <p>Quicquid porro animo cernimus, id omne oritur a sensibus; Neque solum ea communia, verum etiam paria esse dixerunt. Ita relinquet duas, de quibus etiam atque etiam consideret. Neque solum ea communia, verum etiam paria esse dixerunt. Immo videri fortasse. Equidem etiam Epicurum, in physicis quidem, Democriteum puto.</p>`,

  htmlSafe: Ember.String.htmlSafe(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Duo enim genera quae erant, fecit tria. <i>Multoque hoc melius nos veriusque quam Stoici.</i> Quod si ita se habeat, non possit beatam praestare vitam sapientia. Rhetorice     igitur, inquam, nos mavis quam dialectice disputare?</p>

  <p>Quicquid porro animo cernimus, id omne oritur a sensibus; Neque solum ea communia, verum etiam paria esse dixerunt. Ita relinquet duas, de quibus etiam atque etiam consideret. Neque solum ea communia, verum etiam paria esse dixerunt. Immo videri fortasse. Equidem etiam Epicurum, in physicis quidem, Democriteum puto.</p>`)
});
