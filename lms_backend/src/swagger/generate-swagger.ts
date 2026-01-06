import fs from 'fs';
import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './swagger.setup';

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const outputPath = path.resolve('swagger.json');
fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));

console.log('Swagger file generated at:', outputPath);
