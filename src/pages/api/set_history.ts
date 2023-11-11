/**
 * DynamoDBとのやりとり
 * Recipe履歴保存
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const apiGateway = process.env.API_GATEWAY
  const { section, recipe } = req.body

  const api_url = apiGateway + `?param1=${section}` + `&param2=${recipe}`

  if (apiGateway) {
    try {
      const response = await axios.get(api_url)
      const resData = response.data
      res.status(200).json(resData)
    }
    catch (err) {
      console.error(err)
      res.status(500).json({'message': 'API Axios error'})
    }
  } else {
    res.status(400).json({ error: 'API_GATEWAY not defined' })
  }

}
export default handler