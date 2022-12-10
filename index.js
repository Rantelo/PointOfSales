import PointOfSales from './src/PointOfSales.js';

// Instantiate POS
const pointOfSales = new PointOfSales();

// Load inputs
pointOfSales.loadPurchase('./tests/inputs/input1.csv');
pointOfSales.loadPurchase('./tests/inputs/input2.csv');
pointOfSales.loadPurchase('./tests/inputs/input3.csv');

// Print Outputs
pointOfSales.printHistory();
