import { Request, Response } from 'express';

import Cards from '../database/Cards';

export default {
   async index(request:Request, response:Response){
        Cards.find((err:Error, data: any) => {
            if(err){
                response.status(500).send(err);
            }
            else{
                response.status(200).send(data);
            }
        })
   },

   async createCard(request:Request, response:Response){
        const dbCard = request.body;

        Cards.create(dbCard, (err:Error, data: any) => {
            if(err){
                response.status(500).send(err);
            }
            else{
                response.status(201).send(data);
            }
        })
   }
}