// Item class
class Item {
  constructor(rawItem) {
    this.quantity = parseInt(rawItem[0]);
    this.description = rawItem[1];
    this.price = parseFloat(rawItem[2]);
    this.imported = (rawItem[3] === 'true');
    this.basic = (rawItem[4] === 'true');
    this.subTotal = this.quantity * this.price;
  }

  tax() {
    return this.round(
      (this.imported ? this.subTotal * 0.05 : 0) +
      (this.basic ? 0 : this.subTotal * 0.1)
    );
  }

  round(value) {
    return Math.round(value / 0.05) * 0.05;
  }
}

export default Item;