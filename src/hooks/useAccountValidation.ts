import type { IAccountListItem } from '@/features/AccountItem/types';

export interface ValidationResult {
  valid: boolean;
  errors: IAccountListItem['errors'];
}

export const useAccountValidation = (item: IAccountListItem): ValidationResult => {
  const errors = { login: false, password: false };
  let valid = true;

  if (!item.login.trim()) {
    errors.login = true;
    valid = false;
  }

  if (item.type === 'Локальная' && (!item.password || !item.password.trim())) {
    errors.password = true;
    valid = false;
  }

  return { valid, errors };
};
