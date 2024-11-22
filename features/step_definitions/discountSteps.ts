import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { calculateDiscount } from '../../src/discount.js';

let purchaseValue: number;
let finalValue: number;

Given('o cliente tem uma compra de valor {int}', (value: number) => {
  purchaseValue = value;
});

When('o sistema calcula o desconto', () => {
  finalValue = calculateDiscount(purchaseValue);
});

Then('o valor final deve ser {int}', (expectedValue: number) => {
  expect(finalValue).to.equal(expectedValue);
});