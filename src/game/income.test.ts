import { managerIncomePerSecond, type IncomeInputs } from './income';
const base: IncomeInputs = {
  managers: 0,
  training: 0,
  owned: {},
  brandValue: 0,
};
describe('managerIncomePerSecond', () => {
  it('earns nothing with no managers', () => {
    expect(managerIncomePerSecond(base)).toBe(0);
  });
  it('earns 2 per second with one manager and no training', () => {
    expect(managerIncomePerSecond({ ...base, managers: 1 })).toBe(2);
  });
});
