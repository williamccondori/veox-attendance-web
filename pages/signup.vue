<template>
  <div>
    <button @click="back">Back</button>
    <sign-up-form />
  </div>
</template>

<script>
import SignUpForm from '~/components/signup/SignUpForm.vue'
export default {
  components: {
    SignUpForm,
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
