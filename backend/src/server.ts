import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './routes'

const App = express();
const Port = process.env.PORT || 8001;
const Connection_url = 'YOUR MONGODB DATABASE URL'

mongoose.connect(Connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

App.use(express.json());
App.use(cors());
App.use(Routes)

App.listen(Port, () => console.log(`escutando em localhost: ${Port}`));
