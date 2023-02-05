import express from 'express';
import * as boardsFavouriteContollers from '../controllers/boardsFavouriteContollers'


const boardsFavouriteRouter = express.Router();

boardsFavouriteRouter.get('/:userId', boardsFavouriteContollers.getFavouriteBoardsByUser);

export default boardsFavouriteRouter;