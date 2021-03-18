<template>
  <div class="py-8 px-14">
    <h1 class="veox-title">Create a new workspace</h1>
    <form @submit.prevent="createWorksapce">
      <!-- Name field -->
      <div class="mb-2">
        <label for="name" class="veox-label"
          >Name <span class="text-red-500 text-md">*</span></label
        >
        <input
          type="text"
          id="name"
          v-model="workspace.name"
          class="veox-input-sm"
        />
      </div>

      <!-- Identifier field -->
      <div class="mb-2">
        <label for="identifier" class="veox-label"
          >Identifier <span class="text-red-500 text-md">*</span></label
        >
        <input
          type="text"
          id="identifier"
          v-model="workspace.identifier"
          class="veox-input-sm"
        />
      </div>

      <!-- Description field -->
      <div class="mb-4">
        <label for="description" class="veox-label"
          >Description <span class="text-red-500 text-md">*</span></label
        >
        <textarea
          id="description"
          cols="1"
          rows="2"
          v-model="workspace.description"
          class="veox-input-sm"
        ></textarea>
      </div>

      <!-- Submit button-->
      <button type="submit" class="w-full veox-btn-sm">
        Create a new workspace
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workspace: {
        name: '',
        identifier: '',
        description: '',
      },
    }
  },
  methods: {
    createWorksapce() {},
  },
}
</script>

<style></style>
