/**
 * chatGPT APIにプロンプトの送信
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const { prompt } = req.body

  if (process.env.PROD_ENV == process.env.CONST_API_STOP) {
    res.status(200).json('Sorry, u cannot use this service now')
  }

  const apiKey = process.env.OPENAI_APIKEY

  if (!apiKey) {
    res.status(500).json('API key not configured')
  } else {
    const openai = new OpenAI({ apiKey: apiKey })
    try {
      const response = await openai.chat.completions.create({
        messages: [{ "role": "user", "content": prompt }],
        model: "gpt-3.5-turbo",
      })
      res.status(200).json(response.choices[0].message.content)
    }
    catch(err) {
      res.status(500).json('cannot response chatGPT : ' + err)
    }
  }
}
export default handler