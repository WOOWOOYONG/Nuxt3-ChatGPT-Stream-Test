<template>
  <div class="navbar absolute top-0 bg-gray-100">
    <div class="flex-1 justify-between px-12">
      <NuxtLink to="/" class="btn-ghost btn text-xl normal-case">首頁</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/chatroom">告解室</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <div class="dropdown-end dropdown">
        <label tabindex="0" class="btn-ghost btn-circle avatar btn">
          <div class="w-20 rounded-full">
            <img src="https://i.pinimg.com/564x/9f/33/0e/9f330e3a0440b248ddb01325b59ba0e2.jpg" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New </span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
