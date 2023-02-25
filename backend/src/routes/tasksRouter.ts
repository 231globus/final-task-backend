import express from 'express';
import * as tasksContollers from '../controllers/tasksContollers'

const jsonParser = express.json();


const tasksRouter = express.Router();

tasksRouter.get('/', tasksContollers.getTasks);

tasksRouter.get('/:taskId', tasksContollers.getTaskById);

tasksRouter.post('/', jsonParser, tasksContollers.createTask);

tasksRouter.put('/:taskId', jsonParser, tasksContollers.updateTask);

tasksRouter.delete('/:taskId', tasksContollers.deleteTask);

tasksRouter.patch('/:taskId/title', jsonParser, tasksContollers.updateTaskTitle);

tasksRouter.patch('/:taskId/description', jsonParser, tasksContollers.updateTaskDescription);

tasksRouter.patch('/:taskId/order', jsonParser, tasksContollers.updateTaskOrder);

tasksRouter.patch('/:taskId/users', jsonParser, tasksContollers.updateTaskUsers);

tasksRouter.patch('/:taskId/column', jsonParser, tasksContollers.updateTaskColumnId);

export default tasksRouter;