/**
 * chatGPT APIにプロンプトの送信
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import OpenAI, { ClientOptions } from 'openai'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const { prompt } = req.body

  if (process.env.PROD_ENV == process.env.CONST_API_STOP) {
    res.status(200).json('Sorry, u cannot use this service now')
  }

  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    res.status(500).json('API key not configured')
  } else {
    const openai = new OpenAI({ key: apiKey } as ClientOptions)
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": prompt}],
    })
    
    res.status(200).json(response.choices[0].message.content)
  }
}
export default handler