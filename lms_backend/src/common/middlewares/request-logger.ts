import { Request, Response, NextFunction } from "express";
import { logger } from "../logger/app-logger";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    if (
      req.originalUrl.startsWith("/api/docs") ||
      req.originalUrl.includes("swagger")
    ) {
      return;
    }

    logger.info("HTTP Request", {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
    });
  });

  next();
}
