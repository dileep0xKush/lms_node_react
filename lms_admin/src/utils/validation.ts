export type ValidationResult = {
  valid: boolean;
  message?: string;
};

export const validators = {
  required(value: string): ValidationResult {
    if (!value.trim())
      return { valid: false, message: "This field is required" };
    return { valid: true };
  },

  email(value: string): ValidationResult {
    if (!value.trim()) return { valid: false, message: "Email is required" };

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value))
      return { valid: false, message: "Enter a valid email address" };

    return { valid: true };
  },

  min(length: number) {
    return (value: string): ValidationResult => {
      if (value.trim().length < length)
        return {
          valid: false,
          message: `Must be at least ${length} characters`,
        };
      return { valid: true };
    };
  },

  match(compareTo: () => string, field = "values") {
    return (value: string) => {
      if (value !== compareTo()) {
        return { valid: false, message: `Both ${field} must match` };
      }
      return { valid: true };
    };
  },
};
