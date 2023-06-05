// import { Configuration, OpenAIApi } from 'openai'

import { getChatStream } from './utils/ai'

export default defineEventHandler(async (event) => {
  let { messages } = await readBody(event)
  messages = messages.clientMsgs.concat(messages.serverMsgs)

  const stream = await getChatStream({ messages })
  return sendStream(event, stream)

  //   const runtimeConfig = useRuntimeConfig()
  //   console.log(messages)
  //   const configuration = new Configuration({
  //     apiKey: runtimeConfig.apiKey
  //   })

  //   const chatHistory = [
  //     {
  //       role: 'system',
  //       content:
  //         '從現在開始你必須完整的扮演一位療癒師，使命是協助人們解決內心的困擾、減輕壓力、增強自我意識，以及促進身心靈的整體健康'
  //     },
  //     ...messages
  //   ]

  //   const openai = new OpenAIApi(configuration)
  //   const completion = await openai.createChatCompletion(
  //     {
  //       model: 'gpt-3.5-turbo',
  //       messages: chatHistory,
  //       max_tokens: 10,
  //       stream: true
  //     },
  //   )

  //   // console.log(completion.data)

  //   // const response = completion.data.choices[0].message
  //   console.log(completion.data.pipe(res))
  //   return response
})
