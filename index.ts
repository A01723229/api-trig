import express from 'express';
import trigRoutes from './src/routes/trig';

const app = express();
app.use(express.json());

app.use('/', trigRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running'))