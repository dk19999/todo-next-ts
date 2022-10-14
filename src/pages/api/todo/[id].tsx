// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  const { id } = req.query
  switch (requestMethod) {
    case 'GET':
      //get a particular todo with id 
      return res.status(200).json({ message: `You submitted the following data: ${body}` })
    // handle other HTTP methods
    case 'UPDATE':
      //update todo
      return res.status(200).json({ message: `You submitted the following data: ${body}` })
    case 'DELETE':
      //delete todo
      return  res.status(200).json({ message: `You submitted the following data: ${body}` })
    default:
      return res.status(200).json({ message: 'Welcome to API Routes!'})
  }
}
