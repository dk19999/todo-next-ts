// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://jasonwatmore.com/post/2021/08/20/next-js-api-add-middleware-to-api-routes-example-tutorial
// https://giancarlobuomprisco.com/next/protect-next-api-zod

import { NextApiRequest, NextApiResponse } from 'next';

import apiHandler from '@/utils';

import TodoModel, { ITodo } from '../../../models/todo';

const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
  const todos = await TodoModel.find({});
  return res.status(200).json({ todos });
};

const createTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, completed }: ITodo = req.body;
 
    if (!name || completed === undefined) {
      return res.status(400).json({ message: 'Bad Request' });
    }
    const todo = await TodoModel.create({ name, completed });
    //create new todo item
    return res.status(201).json({ message: `Created todo` });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Server Error, Something went wrong!' });
  }
};

export default apiHandler({
  get: getTodos,
  post:createTodo
});
