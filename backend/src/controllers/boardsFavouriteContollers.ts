import { Response, Request } from 'express';
import * as boardService from '../services/board.service';


export const getFavouriteBoardsByUser = async (req: Request, res: Response) => {
  try {
    const foundedBoards = await boardService.findFavouriteBoardsByUser(req.params['userId']);
    res.json(foundedBoards);
  } catch (err) {
    console.log(err);
  }
};