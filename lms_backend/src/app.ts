import express, { Application } from "express";
import routes from "../src/routes/index";
import { setupSwagger } from "./swagger/swagger.setup";

export async function createServer(): Promise<Application> {
  const app = express();

  app.use(express.json());

  setupSwagger(app);

  // API routes
  app.use("/api", routes);

  return app;
}
