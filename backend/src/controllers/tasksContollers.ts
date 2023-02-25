import { Response, Request } from 'express';
import * as taskService from '../services/task.service';
import { checkBody, createError } from '../services/error.service';



export const getTasks = async (req: Request, res: Response) => {
  const boardId = req.baseUrl.split('/')[2];
  const columnId = req.baseUrl.split('/')[4];
  try {
    const foundedTasks = await taskService.findTasks({ boardId, columnId });
    res.json(foundedTasks);
  } catch (err) {
    console.log(err);
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const foundedTask = await taskService.findTaskById(req.params['taskId']);
    res.json(foundedTask);
  }
  catch (err) {
    res.status(404).send(createError(404, 'Task was not founded!'));
  }

};

export const createTask = async (req: Request, res: Response) => {
  const guid = req.header('Guid') || 'undefined';
  const initUser = req.header('initUser') || 'undefined';
  const boardId = req.baseUrl.split('/')[2];
  const columnId = req.baseUrl.split('/')[4];

  const bodyError = checkBody(req.body, ['title', 'order', 'description', 'userId', 'users'])
  if (bodyError) {
    return res.status(400).send(createError(400, "bad request: " + bodyError));
  }

  const { title, order, description, userId, users } = req.body;
  try {
    const newTask = await taskService.createTask({ title, order, description, userId, boardId, columnId, users }, guid, initUser);
    res.json(newTask);
  }
  catch (err) { return console.log(err); }

};

export const updateTask = async (req: Request, res: Response) => {
  const guid = req.header('Guid') || 'undefined';
  const initUser = req.header('initUser') || 'undefined';
  const bodyError = checkBody(req.body, ['title', 'order', 'description', 'userId', 'columnId', 'users'])
  if (bodyError) {
    return res.status(400).send(createError(400, "bad request: " + bodyError));
  }
  const { title, order, description, userId, columnId, users } = req.body;

  try {
    const updatedTask = await taskService.updateTask(req.params.taskId, { title, order, description, userId, columnId, users }, guid, initUser);
    res.json(updatedTask);
  }
  catch (err) { return console.log(err); }
};

export const updateTaskUsers = async (req: Request, res: Response) => {
  const guid = req.header('Guid') || 'undefined';
  const initUser = req.header('initUser') || 'undefined';
  const bodyError = checkBody(req.body, ['users'])
  if (bodyError) {
    return res.status(400).send(createError(400, "bad request: " + bodyError));
  }
  const { users } = req.body;

  try {
    const updatedTask = await taskService.updateTask(req.params.taskId, { users }, guid, initUser);
    res.json(updatedTask);
  }
  catch (err) { return console.log(err); }
};

export const updateTaskColumnId = async (req: Request, res: Response) => {
  const guid = req.header('Guid') || 'undefined';
  const initUser = req.header('initUser') || 'undefined';
  const bodyError = checkBody(req.body, ['columnId'])
  if (bodyError) {
    return res.status(400).send(createError(400, "bad request: " + bodyError));
  }
  const { columnId} = req.body;

  try {
    const updatedTask = await taskService.updateTask(req.params.taskId, { columnId }, guid, initUser);
    res.json(updatedTask);
  }
  catch (err) { return console.log(err); }
};

export const updateTaskOrder = async (req: Request, res: Response) => {
  const guid = req.header('Guid') || 'undefined';
  const initUser = req.header('initUser') || 'undefined';
  const bodyError = checkBody(req.body, ['order'])
  if (bodyError) {
    return res.status(400).send(createError(400, "bad request: " + bodyError));
  }
  const { order } = req.body;

  try {
    const updatedTask = await taskService.updateTask(req.params.taskId, { order }, guid, initUser);
    res.json(updatedTask);
  }
  catch (err) { return console.log(err); }
};

export const updateTaskTitle = async (req: Request, res: Response) => {
  const guid = req.header('Guid') || 'undefined';
  const initUser = req.header('initUser') || 'undefined';
  const bodyError = checkBody(req.body, ['title'])
  if (bodyError) {
    return res.status(400).send(createError(400, "bad request: " + bodyError));
  }
  const { title } = req.body;

  try {
    const updatedTask = await taskService.updateTask(req.params.taskId, { title }, guid, initUser);
    res.json(updatedTask);
  }
  catch (err) { return console.log(err); }
};

export const updateTaskDescription = async (req: Request, res: Response) => {
  const guid = req.header('Guid') || 'undefined';
  const initUser = req.header('initUser') || 'undefined';
  const bodyError = checkBody(req.body, ['description'])
  if (bodyError) {
    return res.status(400).send(createError(400, "bad request: " + bodyError));
  }
  const { description } = req.body;

  try {
    const updatedTask = await taskService.updateTask(req.params.taskId, { description }, guid, initUser);
    res.json(updatedTask);
  }
  catch (err) { return console.log(err); }
};

export const deleteTask = async (req: Request, res: Response) => {
  const guid = req.header('Guid') || 'undefined';
  const initUser = req.header('initUser') || 'undefined';
  try {
    const deletedTask = await taskService.deleteTaskById(req.params.taskId, guid, initUser);
    res.json(deletedTask);
  }
  catch (err) { return console.log(err); }
};
