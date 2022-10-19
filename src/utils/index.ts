import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/db-connect';

type httpMethod = 'get' | 'put' | 'post' | 'put' | 'delete' | 'patch';

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

type handlers = {
  [key in httpMethod]: (
    req: NextApiRequest,
    res: NextApiResponse
  ) => Promise<void>;
};

type handler = RequireAtLeastOne<handlers, httpMethod>;

export default function apiHandler(handler: handler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    let method: httpMethod = 'get';

    if (req?.method) {
      method = req?.method?.toLowerCase() as httpMethod;
    }

    // check handler supports HTTP method
    if (method && !handler[method])
      return res.status(405).end(`Method ${req.method} Not Allowed`);

    try {
      // global middleware
      // await jwtMiddleware(req, res);
      await dbConnect();

      // route handler
      await handler[method]?.(req, res);
    } catch (err) {
      console.log(err, 'err');
      // global error handler
      // errorHandler(err, res);
    }
  };
}
