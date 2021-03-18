<template>
  <div class="h-screen bg-white">
    <div class="flex justify-center p-10 md:p-0">
      <nuxt-link to="/" class="absolute top-10 left-10 focus:outline-none">
        <svg
          class="w-6 h-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </nuxt-link>
      <sign-in-form
        class="w-full my-10 bg-white border border-gray-100 rounded md:w-6/12 lg:w-96"
      />
    </div>
  </div>
</template>

<script>
import SignInForm from '~/components/signin/SignInForm.vue'

export default {
  layout: 'default',
  head: {
    title: 'Sign in',
  },
  components: { SignInForm },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
