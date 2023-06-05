// server/utils/ai.js
import { Configuration, OpenAIApi } from 'openai'

const config = useRuntimeConfig()

const configuration = new Configuration({
  apiKey: config.apiKey
})
const openai = new OpenAIApi(configuration)

export const getChatStream = async ({ messages }) => {
  const response = await openai.createChatCompletion(
    {
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 200,
      stream: true
    },
    { responseType: 'stream' }
  )

  return response.data
}
