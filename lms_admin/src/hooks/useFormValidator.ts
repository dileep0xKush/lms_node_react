import { useCallback, useState } from 'react';
import type { ValidationResult } from '../utils/validation';

/* ----------------------------------
 * Types
 * ---------------------------------- */

type FieldRule = (value: string) => ValidationResult;

export type FormSchema<T extends Record<string, string>> = {
  [K in keyof T]?: FieldRule[];
};

type Errors<T> = Partial<Record<keyof T, string>>;

/* ----------------------------------
 * Hook
 * ---------------------------------- */

export function useFormValidator<T extends Record<string, string>>(
  initialValues: T,
  schema: FormSchema<T>,
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors<T>>({});

  /* ----------------------------------
   * Validate single field
   * ---------------------------------- */
  const validateField = useCallback(
    (name: keyof T, value: string): boolean => {
      const rules = schema[name];
      if (!rules?.length) return true;

      for (const rule of rules) {
        const result = rule(value);
        if (!result.valid) {
          setErrors((prev) =>
            prev[name] === result.message ? prev : { ...prev, [name]: result.message },
          );
          return false;
        }
      }

      setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));

      return true;
    },
    [schema],
  );

  /* ----------------------------------
   * Handle field change
   * ---------------------------------- */
  const handleChange =
    (name: keyof T) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      setValues((prev) => (prev[name] === value ? prev : { ...prev, [name]: value }));

      validateField(name, value);
    };

  /* ----------------------------------
   * Validate entire form
   * ---------------------------------- */
  const validateForm = useCallback((): boolean => {
    let isValid = true;

    (Object.keys(schema) as Array<keyof T>).forEach((name) => {
      const valid = validateField(name, values[name]);
      if (!valid) isValid = false;
    });

    return isValid;
  }, [schema, validateField, values]);

  /* ----------------------------------
   * Reset form
   * ---------------------------------- */
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  /* ----------------------------------
   * Exposed API
   * ---------------------------------- */
  return {
    values,
    errors,
    handleChange,
    validateField,
    validateForm,
    setValues,
    setErrors,
    resetForm,
  };
}
