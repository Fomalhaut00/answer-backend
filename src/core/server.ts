import express from 'express';
import routes from '../routes';

const app = express();

// 中间件
app.use(express.json());

// 路由
app.use('/api', routes);

export default app;