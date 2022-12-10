import Item from '../src/Item';

test('Item instantiate correctly', () => {
  const item = new Item([3,'boxes of chocolates',11.25,'true','true']);
  expect(item.quantity).toBe(3);
  expect(item.description).toMatch('boxes of chocolates');
  expect(item.price).toBe(11.25);
  expect(item.imported).toBe(true);
  expect(item.basic).toBe(true);
  expect(item.subTotal).toBe(33.75);
});
test('Item calculates tax correctly', () => {

  const item1 = new Item([1,'bottle of perfume',27.99,'true','false']);
  const item2 = new Item([1,'bottle of perfume',18.99,'false','false']);
  const item3 = new Item([1,'packet of headache pills',9.75,'false','true']);
  const item4 = new Item([3,'boxes of chocolates',11.25,'true','true']);

  expect(item1.tax().toFixed(2)).toMatch((4.20).toFixed(2));
  expect(item2.tax().toFixed(2)).toMatch((1.90).toFixed(2));
  expect(item3.tax().toFixed(2)).toMatch((0).toFixed(2));
  // Note: The following use case seems to be wrong in the coderbyte example
  expect(item4.tax().toFixed(2)).toMatch((1.80).toFixed(2));

});