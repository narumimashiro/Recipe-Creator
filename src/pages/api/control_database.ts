/**
 * DynamoDBとのやりとり
 * Recipe履歴保存、取得 
 */

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const apiGateway = process.env.API_GATEWAY

  const api_url = apiGateway + '?param1=get_history'

  if(apiGateway) {
    fetch(api_url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Server error')
        }
        return res.json()
      })
      .then(data => {
        return res.status(200).json(data)
      })
      .catch(err => {
        console.error('Fetch error', err)
        return res.status(404).json('Failed API')
      })
  }
}
export default handler