import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.list.cycle('skate', 'barcelona', 'flip', 'kickflip', 'sick'),
  ocurrences: faker.list.cycle(10, 55, 40, 60, 76, 19, 23),
});