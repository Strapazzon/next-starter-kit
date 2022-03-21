/**
 2022 Getúlio Strapazzon - Next starter kit 
**/

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
