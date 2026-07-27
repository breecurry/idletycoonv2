import type { GameState } from './types';
import { ECONOMY } from './tuning';

export type IncomeInputs = Pick<
  GameState,
  'managers' | 'training' | 'owned' | 'brandValue'
>;

export function managerIncomePerSecond(inputs: IncomeInputs): number {
  return inputs.managers * ECONOMY.managerBasePay * (inputs.training + 1);
}
