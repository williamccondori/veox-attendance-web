<template>
  <div class="py-8 px-14">
    <form @submit.prevent="userLogin">
      <div class="mb-10 font-normal text-center text-gray-500 text-md">
        Sign in to continue to:<br />
        <span class="font-bold">Attendance</span>
      </div>
      <div class="mb-2">
        <input
          type="email"
          v-model="login.email"
          placeholder="Enter email"
          class="veox-input"
        />
      </div>
      <div class="mb-4">
        <input
          type="password"
          v-model="login.password"
          placeholder="Enter password"
          class="veox-input"
        />
      </div>

      <!-- Submit button-->
      <button type="submit" class="w-full mb-10 veox-btn">Sign in</button>
      
      <div class="text-center">
        <nuxt-link to="/signup" class="text-sm text-blue-800 hover:underline"
          >Sign up for an account</nuxt-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.login })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
