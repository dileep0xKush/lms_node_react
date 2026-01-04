import express, { Application } from "express";
import routes from "../src/routes/index";
import { setupSwagger } from "./swagger/swagger.setup";
import { globalErrorHandler } from "./common/middlewares/error-handler";
import { requestLogger } from "./common/middlewares/request-logger";
import { responseHandler } from "./common/middlewares/response.middleware";
import cookieParser from "cookie-parser";
import cors from "cors";

export async function createServer(): Promise<Application> {
  const app = express();

  const clientOrigin = process.env.CLIENT_URL ?? "http://localhost:5173";

  const corsConfig = {
    origin: clientOrigin,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "x-app-name", "Authorization"],
    exposedHeaders: ["set-cookie"],
  };

  app.use(cors(corsConfig));

  app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Origin", clientOrigin);
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, x-app-name, Authorization"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
      );
      return res.sendStatus(204);
    }
    next();
  });

  app.use(express.json());
  app.use(cookieParser());
  app.use(requestLogger);
  app.use(responseHandler);

  setupSwagger(app);

  app.use("/api", routes);

  app.use(globalErrorHandler);

  return app;
}
