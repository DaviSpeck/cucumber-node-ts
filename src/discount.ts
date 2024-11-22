export function calculateDiscount(value: number): number {
    const discountRate = value > 100 ? 0.1 : 0;
    return value - value * discountRate;
}  