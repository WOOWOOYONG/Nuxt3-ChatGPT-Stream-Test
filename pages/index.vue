<script setup lang="ts">
useHead({
  title: '首頁',
  meta: [{ name: '靈魂告解室', content: '幫助治癒人們的心靈健康' }]
})

const dropdownTitle = ref('Click')
const options = ref<string[]>(['測試選項1', '測試選項2'])
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-semibold text-indigo-400">Hello</h1>
    <p class="mt-4 text-5xl font-bold text-gray-600">
      專題開始了<Icon name="ant-design:aliwangwang-outlined" color="black" />
    </p>
    <div class="dropdown mt-6">
      <label tabindex="0" class="btn m-1">{{ dropdownTitle }}</label>
      <ul tabindex="0" class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
        <li @click="dropdownTitle = options[0]">
          <a>{{ options[0] }}</a>
        </li>
        <li @click="dropdownTitle = options[1]">
          <a>{{ options[1] }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
