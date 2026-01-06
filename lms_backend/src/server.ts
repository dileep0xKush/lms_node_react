import 'dotenv/config';
import { connectDB } from '../config/database';
import { createServer } from './app';

async function bootstrap() {
  await connectDB();

  const app = await createServer();
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
  });
}

bootstrap();
