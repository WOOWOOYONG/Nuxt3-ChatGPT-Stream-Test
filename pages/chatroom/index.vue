<script setup>
// import { storeToRefs } from 'pinia'
// import { useChatCharacters } from '~/stores/characters'

// const { chatCharacterId } = storeToRefs(useChatCharacters())

useHead({
  title: '告解室',
  meta: [{ name: '靈魂告解室', content: '幫助治癒人們的心靈健康' }]
})
</script>

<template>
  <div>
    <ChatCharacters />
  </div>
</template>
