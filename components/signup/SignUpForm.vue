<template>
  <div class="py-8 border border-gray-100 shadow-md px-14">
    <form @submit.prevent="userRegister">
      <div class="mb-10 font-normal text-center text-gray-500 text-md">
        Sign up for an account to continue to:<br />
        <span class="font-bold">Attendance</span>
      </div>
      <div class="mb-3">
        <label for="name" class="veox-label"
          >Name <span class="text-red-500 text-md">*</span></label
        >
        <input
          type="text"
          id="name"
          v-model="register.name"
          class="veox-input-sm"
        />
      </div>
      <div class="mb-3">
        <label for="lastName" class="veox-label"
          >Last name <span class="text-red-500 text-md">*</span></label
        >
        <input
          type="text"
          id="lastName"
          v-model="register.lastName"
          class="veox-input-sm"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="veox-label"
          >Email <span class="text-red-500 text-md">*</span></label
        >
        <input
          type="email"
          id="email"
          v-model="register.email"
          class="veox-input-sm"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="veox-label"
          >Password <span class="text-red-500 text-md">*</span></label
        >
        <input
          type="password"
          id="password"
          v-model="register.password"
          class="veox-input-sm"
        />
      </div>
      <div class="mb-3">
        <label for="confirmationPassword" class="veox-label"
          >Confirmation password
          <span class="text-red-500 text-md">*</span></label
        >
        <input
          type="password"
          id="confirmationPassword"
          v-model="register.confirmationPassword"
          class="veox-input-sm"
        />
      </div>
      <div class="mb-10">
        <button type="submit" class="w-full veox-btn">Sign up</button>
      </div>
      <div class="text-center">
        <nuxt-link to="/signin" class="text-sm text-blue-800 hover:underline"
          >Do you already have an account? Sign in</nuxt-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmationPassword: '',
      },
    }
  },
  methods: {
    async userRegister() {
      try {
        await this.$auth.loginWith('local', { data: this.login })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
