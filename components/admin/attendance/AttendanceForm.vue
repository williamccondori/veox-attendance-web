<template>
  <div>
    <h1 class="veox-title">My status</h1>
    <hr class="mb-4" />
    <div class="mb-4">
      <div class="mb-4">
        <span class="block uppercase font-semibold">William</span>
        <span class="block uppercase font-bold">Condori Quispe</span>
      </div>
      <div class="flex">
        <p class="mr-4 font-bold">Status:</p>
        <span
          class="py-1 px-2 text-sm text-white font-semibold rounded"
          :class="me.isPresent ? 'bg-green-500' : 'bg-red-500'"
          >{{ me.isPresent ? 'Present' : 'Absent' }}</span
        >
      </div>
    </div>
    <form>
      <button class="submit veox-btn">Register attendance</button>
    </form>
  </div>
</template>

<script>
import SignUpForm from '~/components/signup/SignUpForm.vue'
export default {
  data() {
    return {
      me: {
        name: 'William',
        lastName: 'Condori Quispe',
        isPresent: true,
      },
    }
  },
  components: { SignUpForm },
}
</script>
