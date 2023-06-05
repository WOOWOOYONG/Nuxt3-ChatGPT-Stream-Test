// repositories/chat.js
export const getAnswer = async ({ messages }) => {
  try {
    const { body } = await fetch('/api/chatgpt', {
      method: 'POST',
      body: JSON.stringify({
        messages
      })
    })
    if (!body) throw new Error('Unknown error')
    return body
  } catch (error) {
    console.log(error)
  }
}
