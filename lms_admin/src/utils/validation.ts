/* ----------------------------------
 * Types
 * ---------------------------------- */

export type ValidationResult = {
  valid: boolean;
  message?: string;
};

export type FieldValidators<T> = {
  [K in keyof T]?: Array<(value: string) => ValidationResult>;
};

export type FormErrors<T> = Partial<Record<keyof T, string>>;

/* ----------------------------------
 * Validators (Reusable)
 * ---------------------------------- */

export const validators = {
  /* Required */
  required(value: string): ValidationResult {
    if (!value?.trim()) {
      return { valid: false, message: 'This field is required' };
    }
    return { valid: true };
  },

  /* Email */
  email(value: string): ValidationResult {
    if (!value?.trim()) {
      return { valid: false, message: 'Email is required' };
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value)) {
      return { valid: false, message: 'Enter a valid email address' };
    }

    return { valid: true };
  },

  /* Minimum length */
  min(length: number) {
    return (value: string): ValidationResult => {
      if (value.trim().length < length) {
        return {
          valid: false,
          message: `Must be at least ${length} characters`,
        };
      }
      return { valid: true };
    };
  },

  /* Maximum length */
  max(length: number) {
    return (value: string): ValidationResult => {
      if (value.trim().length > length) {
        return {
          valid: false,
          message: `Must be at most ${length} characters`,
        };
      }
      return { valid: true };
    };
  },

  /* Match another field (password, confirm password) */
  match(compareTo: () => string, field = 'values') {
    return (value: string): ValidationResult => {
      if (value !== compareTo()) {
        return { valid: false, message: `Both ${field} must match` };
      }
      return { valid: true };
    };
  },

  /* Number only */
  number(value: string): ValidationResult {
    if (!/^\d+$/.test(value)) {
      return { valid: false, message: 'Only numbers are allowed' };
    }
    return { valid: true };
  },

  /* Phone number */
  phone(value: string): ValidationResult {
    const pattern = /^[6-9]\d{9}$/;
    if (!pattern.test(value)) {
      return { valid: false, message: 'Enter a valid phone number' };
    }
    return { valid: true };
  },

  /* Strong password */
  strongPassword(value: string): ValidationResult {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/;

    if (!pattern.test(value)) {
      return {
        valid: false,
        message: 'Password must contain uppercase, lowercase, number & special character',
      };
    }
    return { valid: true };
  },
};

/* ----------------------------------
 * Common Validation Runner (GLOBAL)
 * ---------------------------------- */

export function validateFields<T extends Record<string, any>>(
  values: T,
  rules: FieldValidators<T>,
): FormErrors<T> {
  const errors: FormErrors<T> = {};

  Object.keys(rules).forEach((key) => {
    const field = key as keyof T;
    const fieldValidators = rules[field];
    const value = String(values[field] ?? '');

    if (!fieldValidators) return;

    for (const validate of fieldValidators) {
      const result = validate(value);

      if (!result.valid) {
        errors[field] = result.message;
        break; // stop on first error
      }
    }
  });

  return errors;
}
