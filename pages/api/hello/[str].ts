import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  str: string | string[] | undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { str } = req.query;
  console.log('str: ', str);
  res.status(200).json({ str });
}
