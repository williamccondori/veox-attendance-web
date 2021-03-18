<template>
  <div
    class="flex flex-wrap content-center justify-center h-screen bg-white"
  >
    <div>
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-medium text-gray-500">Attendance</h1>
      </div>
      <div class="text-center">
        <nuxt-link to="/signin" class="px-10 veox-btn">Sign in</nuxt-link>
        <nuxt-link to="/signup" class="px-10 veox-btn">Sign up</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  auth: false,
  head: {
    title: 'Attendance',
  },
}
</script>
