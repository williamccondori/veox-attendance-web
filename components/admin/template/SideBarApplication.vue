<template>
  <div
    class="flex flex-wrap content-between h-full bg-blue-900 dark:bg-gray-900"
  >
    <ul class="p-2">
      <li class="p-2 mb-8">
        <img src="../../../static/veox_white.svg" alt="logo" />
      </li>
    </ul>
    <ul class="p-2">
      <li>
        <a
          @click="openPrincipalPanel"
          class="block p-3 text-white rounded cursor-pointer hover:bg-blue-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
        </a>
      </li>
      <li class="p-2 mt-8">
        <NuxtLink to="/logout">
          <img
            src="https://dummyimage.com/300x300/f34354/fff/&text=+VE+"
            alt="logo"
            class="rounded-full"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    openPrincipalPanel() {
      this.$store.commit('SET_IS_PRINCIPAL_PANEL', true)
    },
  },
}
</script>

<style></style>
