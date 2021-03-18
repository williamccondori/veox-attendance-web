<template>
  <div>
    <form>
      <button class="submit">Reigster</button>
      <sign-up-form />
    </form>
  </div>
</template>

<script>
import SignUpForm from '~/components/signup/SignUpForm.vue'
export default {
  components: { SignUpForm },
}
</script>
