import { expect } from 'chai';
import { calculateDiscount } from '../src/discount.js';

describe('Discount Calculation', () => {
  it('aplica 10% de desconto para compras acima de 100', () => {
    const result = calculateDiscount(150);
    expect(result).to.equal(135);
  });

  it('não aplica desconto para compras iguais ou abaixo de 100', () => {
    const result = calculateDiscount(50);
    expect(result).to.equal(50);
  });
});