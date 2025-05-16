import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import requestLogger from './middlewares/logger.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use(cors());
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Views")));

app.use('/api', routes);

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "Views", "index.html"));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server running on  http://localhost:${port}/home`);
});
