import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db'

const getEntry = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()

  let id = request.query.id
  const avo = await db.getById(id as string)
  response.status(200).json(avo)
}

export default getEntry
