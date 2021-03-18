<template>
  <div>
    <form @submit.prevent="userLogin">
      <input type="email" v-model="login.email" />
      <input type="password" v-model="login.password" />
      <button type="submit">Sign in</button>
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

<style></style>
