import { NextFunction, Request, Response } from 'express';
import { AnyObjectSchema, ValidationError } from 'yup';

type RequestPart = 'body' | 'params' | 'query';

type ValidationDetail = {
  path?: string;
  message: string;
};

export function validate(schema: AnyObjectSchema, part: RequestPart = 'body') {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = part === 'body' ? req.body : part === 'params' ? req.params : req.query;

      const validated = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      if (part === 'body') {
        req.body = validated;
      } else if (part === 'params') {
        Object.assign(req.params as unknown as object, validated as unknown as object);
      } else {
        Object.assign(req.query as unknown as object, validated as unknown as object);
      }

      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        const details: ValidationDetail[] = error.inner.map((e) => {
          const detail: ValidationDetail = {
            message: e.message,
          };

          if (e.path) {
            detail.path = e.path;
          }

          return detail;
        });

        return res.error('Validation failed', 422, {
          errors: details,
          part,
        });
      }

      return res.error('Validation failed', 422, {
        reason: error instanceof Error ? error.message : 'Invalid payload',
        part,
      });
    }
  };
}
