<script setup>
import { storeToRefs } from 'pinia'
import { useChatCharacters } from '~/stores/characters'

const { characters } = storeToRefs(useChatCharacters())
</script>

<template>
  <div>
    <h1 class="mb-12 text-center text-4xl">想要和誰聊天呢？</h1>
    <ul class="flex justify-center gap-6">
      <li v-for="c in characters" :key="c.id">
        <CharacterCard :c="c" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
