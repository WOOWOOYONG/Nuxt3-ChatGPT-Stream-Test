<script setup>
import { storeToRefs } from 'pinia'
import { getAnswer } from '~/chat'
import { useChatCharacters } from '~/stores/characters'

const { selectedCharacter } = storeToRefs(useChatCharacters())

const answer = ref(null)
const question = ref('')

const chatMessages = {
  clientMsgs: selectedCharacter.value.clientMsgs,
  serverMsgs: selectedCharacter.value.serverMsgs
}

const askQuestion = async () => {
  chatMessages.clientMsgs.push({
    role: 'user',
    content: question.value
  })
  question.value = ''
  const stream = await getAnswer({ messages: chatMessages })
  answer.value = {
    role: 'assistant',
    content: ''
  }
  useChatStream({
    stream,
    onChunk: ({ data }) => {
      answer.value.content += data
    },
    onReady: () => {
      chatMessages.clientMsgs.push(answer.value)
      answer.value = null
    }
  })
}

const handleEnterKey = (event) => {
  if (event.isComposing) {
    return
  }
  if (event.key === 'Enter') {
    askQuestion()
  }
}

const scrollContainer = ref(null)

const scrollToBottom = () => {
  scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight
}
onUpdated(() => {
  scrollToBottom()
})

// const sendMsg = () => {
//   chatMessages.value = [...chatMessages.value, { role: 'user', content: question.value }]
//   $fetch('/api/chatgpt', {
//     method: 'POST',
//     body: JSON.stringify({ messages: chatMessages.value })
//   })
//     .then((res) => {
//       console.log(res)
//       chatMessages.value = [...chatMessages.value, res]
//       question.value = ''
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }
</script>

<template>
  <h1 class="text-center text-4xl">療天時間</h1>

  <div class="container mx-auto py-8">
    <div class="mx-auto max-w-md">
      <div class="relative rounded-md bg-zinc-50 shadow">
        <!-- Message container -->
        <div id="message-container" ref="scrollContainer" class="h-[500px] overflow-y-scroll p-4">
          <ChatBubbles :chat-messages="chatMessages" :answer="answer" />
        </div>
        <!-- Input form -->
        <div class="absolute -bottom-10 flex w-full items-center justify-center">
          <input
            v-model.trim="question"
            type="text"
            class="w-full rounded-l-md border border-r-0 border-slate-400 py-1 indent-4"
            placeholder="說點什麼吧？"
            @keydown.enter="handleEnterKey"
          />
          <button
            class="w-[50px] rounded-r-md border bg-green-900 py-1 hover:bg-green-700"
            @click="askQuestion"
          >
            <Icon name="tabler:send" size="20" color="white" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
