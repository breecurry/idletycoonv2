import { formatNumber } from './formatNumber';
describe('formatNumber', () => {
  it('leaves numbers under 1000 alone', () => {
    expect(formatNumber(42)).toBe('42');
  });
  it('handles zero', () => {
    expect(formatNumber(0)).toBe('0');
  });
  it('handles just under 1k', () => {
    expect(formatNumber(999)).toBe('999');
  });
  it('switches to K at 1000', () => {
    expect(formatNumber(1000)).toBe('1.00K');
  });
  it('formats millions to two decimles', () => {
    expect(formatNumber(1234567)).toBe('1.23M');
  });
  it('formats trillions', () => {
    expect(formatNumber(1000000000000)).toBe('1.00T');
  });
});
