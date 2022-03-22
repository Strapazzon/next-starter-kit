/*
 This is a Next.js project bootstrapped with Strapazzon/next-starter
 You can change this header message in .eslint.json.
 And run yarn lint --fix to change all files
 Ex: Your Company 2022
*/

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Getúlio Strapazzon' })
}
