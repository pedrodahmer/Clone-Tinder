import { Router } from 'express';
import mongoose from 'mongoose';

const routes = Router();

import Landing from './pages/landing';
import Cards from './pages/cards';

routes.get('/', Landing.index);
routes.get('/tinderClone/card', Cards.index);
routes.post('/tinderClone/card', Cards.createCard);

export default routes;

