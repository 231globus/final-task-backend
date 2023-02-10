import express from 'express';
import * as boardsContollers from '../controllers/boardsContollers'
import columnsRouter from './columnsRouter';

const jsonParser = express.json();


const boardsRouter = express.Router();
boardsRouter.use('/:boardId/columns', columnsRouter);

boardsRouter.get('/', boardsContollers.getBoards);

boardsRouter.get('/:boardId', boardsContollers.getBoardById);

boardsRouter.post('/', jsonParser, boardsContollers.createBoard);

boardsRouter.put('/:boardId', jsonParser, boardsContollers.updateBoard);

boardsRouter.patch('/:boardId/bgcolor', jsonParser, boardsContollers.updateBoardColor);

boardsRouter.patch('/:boardId/image', jsonParser, boardsContollers.updateBoardImg);

boardsRouter.patch('/:boardId/favourites', jsonParser, boardsContollers.updateBoardFavourites);

boardsRouter.delete('/:boardId', boardsContollers.deleteBoard);


export default boardsRouter;