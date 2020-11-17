import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './routes'

const App = express();
const Port = process.env.PORT || 8001;
const Connection_url = 'mongodb+srv://admin:gw28HCmbSNCCuRpY@clusterclonetinder.bhqsx.mongodb.net/tinderclonedb?retryWrites=true&w=majority'

mongoose.connect(Connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

App.use(express.json());
App.use(cors());
App.use(Routes)

App.listen(Port, () => console.log(`escutando em localhost: ${Port}`));