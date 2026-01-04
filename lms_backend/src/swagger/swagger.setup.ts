import { Express, Request } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

export const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LMS Backend API",
      version: "1.0.0",
      description: "REST API documentation for LMS backend",
    },
    servers: [
      {
        url: process.env.API_BASE_URL || "http://localhost:3000/api",
      },
    ],
  },

  // Load swagger docs from modules
  apis: [
    "src/modules/**/*.routes.ts",
    "src/modules/**/*.controller.ts",
    "src/modules/**/*.dto.ts",
    "src/modules/**/*.swagger.ts",
  ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const swaggerUiOptions = {
  swaggerOptions: {
    displayRequestDuration: true,
    persistAuthorization: true,
    filter: true,
    debug: true,

    requestInterceptor: (req: Request) => {
      req.headers["x-app-name"] = "LMS-App";
      return req;
    },
  },

  customSiteTitle: "LMS API Documentation",

  customCss: `
    .swagger-ui .topbar { display: none; }
  `,
};

export function setupSwagger(app: Express) {
  if (process.env.NODE_ENV === "production") {
    console.log("Swagger disabled in production");
    return;
  }

  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, swaggerUiOptions)
  );

  console.log("Swagger available at http://localhost:3000/api/docs");
}
