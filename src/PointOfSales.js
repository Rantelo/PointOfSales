// Point of Sales class
import fs from 'fs';
import Item from './Item.js';

class PointOfSales {
  constructor() {
    this.purchases = [];
  }

  loadPurchase(inputPath) {
    try {
      const rawPurchase = fs.readFileSync(inputPath, 'utf8');
      const rawLines = rawPurchase.split("\n").slice(1);

      const purchase = rawLines.map(line => new Item(line.split(",")));
      this.purchases.push(purchase);

    } catch (err) {
      console.log(err);
    }
  }

  countSales() {
    return this.purchases.length;
  }

  printPurchase(index) {
    const detail = this.purchases[index]
    .map(i => `${i.quantity} ${i.imported ? 'imported ' : ''}${i.description}: ${(i.subTotal + i.tax()).toFixed(2)}`);

    const taxes = this.purchases[index]
    .reduce((sum, i) => i.tax() + sum, 0);

    const total = this.purchases[index]
    .reduce((sum, i) => (i.subTotal + i.tax() + sum), 0);

    console.log(`Output ${index + 1}:`);
    detail.forEach(element => console.log(element));
    console.log(`Sales Taxes: ${taxes.toFixed(2)}`);
    console.log(`Total: ${total.toFixed(2)}\n______`);
  }

  printHistory() {
    for (let i = 0; i < this.countSales(); i++) {
      this.printPurchase(i);
    }
  }
}

export default PointOfSales;