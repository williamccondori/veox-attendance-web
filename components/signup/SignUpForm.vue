<template>
  <div>
    <form @submit.prevent="userRegister">
      <div>
        <label for="name">Name <span>*</span></label>
        <input type="text" id="name" v-model="register.name" />
      </div>
      <div>
        <label for="lastName">Last name <span>*</span></label>
        <input type="text" id="lastName" v-model="register.lastName" />
      </div>
      <div>
        <label for="email">Email <span>*</span></label>
        <input type="email" id="email" v-model="register.email" />
      </div>
      <div>
        <label for="password">Password <span>*</span></label>
        <input type="password" id="password" v-model="register.password" />
      </div>
      <div>
        <button type="submit">Sign up</button>
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
      },
    }
  },
  methods: {
    async userRegister() {},
  },
}
</script>
