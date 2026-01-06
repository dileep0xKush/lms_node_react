import { useState } from 'react';
import type { ValidationResult } from '../utils/validation';

type FieldRule = (value: string) => ValidationResult;

export type FormSchema<T extends Record<string, string>> = {
  [K in keyof T]: FieldRule[];
};

export function useFormValidator<T extends Record<string, string>>(
  initialValues: T,
  schema: FormSchema<T>,
) {
  const [values, setValues] = useState<T>(initialValues);

  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const validateField = (name: keyof T, value: string) => {
    const rules = schema[name];
    if (!rules) return true;

    for (const rule of rules) {
      const result = rule(value);
      if (!result.valid) {
        setErrors((prev) => ({
          ...prev,
          [name]: result.message,
        }));
        return false;
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    return true;
  };

  const handleChange = (name: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateForm = () => {
    let ok = true;

    (Object.keys(values) as Array<keyof T>).forEach((name) => {
      const valid = validateField(name, values[name]);
      if (!valid) ok = false;
    });

    return ok;
  };

  return {
    values,
    errors,
    handleChange,
    validateField,
    validateForm,
    setValues,
    setErrors,
  };
}
