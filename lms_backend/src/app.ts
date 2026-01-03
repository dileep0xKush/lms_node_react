import express, { Application } from "express";
import routes from "../src/routes/index";
import { setupSwagger } from "./swagger/swagger.setup";
import { globalErrorHandler } from "./common/middlewares/error-handler";
import { requestLogger } from "./common/middlewares/request-logger";

export async function createServer(): Promise<Application> {
  const app = express();

  app.use(express.json());
  app.use(requestLogger);

  setupSwagger(app);

  // API routes
  app.use("/api", routes);
  app.use(globalErrorHandler);

  return app;
}
