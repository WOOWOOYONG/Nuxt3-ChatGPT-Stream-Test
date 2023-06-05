<script setup>
import { useChatCharacters } from '~/stores/characters'

const { selectCharacterId } = useChatCharacters()
const { id } = useRoute().params
selectCharacterId(id)
</script>

<template>
  <div>
    <ChatWindow />
  </div>
</template>
