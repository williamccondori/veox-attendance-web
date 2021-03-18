<template>
  <div>
    <button @click="back">Back</button>
    <sign-in-form />
  </div>
</template>

<script>
import SignInForm from '~/components/signin/SignInForm.vue'

export default {
  layout: 'login',
  components: { SignInForm },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
