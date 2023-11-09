/**
 * chatGPT APIにプロンプトの送信
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import OpenAI from 'openai'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const { prompt } = req.body

  const openai = new OpenAI()
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": prompt}],
  })
  
  res.status(200).json(response.choices[0].message.content)
}
export default handler