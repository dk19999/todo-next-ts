// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

import apiHandler from '@/utils';

import TodoModel, { ITodo } from '../../../models/todo';

const getTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const todo = await TodoModel.findOne({ _id: id });
    if (!todo) {
      res.status(404).json({ message: `No todo found with id ${id} ` });
      return;
    }
    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).json({ message: 'Server Error, Something went wrong!' });
  }
};

const updateTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const { name, completed }: ITodo = req.body;

    if (!name || completed === undefined) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    const todo = await TodoModel.findOneAndUpdate(
      { _id: id },
      { name, completed }
    );
    if (!todo) {
      return res.status(404).json({ message: `No todo found with id ${id}` });
    }
    res.status(200).json({ message: 'To do updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error, Something went wrong!' });
  }
};

const deleteTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const { name, completed }: ITodo = req.body;

    const todo = await TodoModel.findOneAndDelete({ _id: id });
    if (!todo) {
      return res.status(404).json({ message: `No todo found with id ${id}` });
    }
    res.status(200).json({ message: 'To do deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error, Something went wrong!' });
  }
};

export default apiHandler({
  get: getTodo,
  put: updateTodo,
  delete: deleteTodo,
});
