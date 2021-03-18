<template>
  <div>
    <!-- Principal drawer-->
    <div
      class="fixed top-0 z-30 w-3/5 h-full p-20 overflow-auto transition-all duration-300 ease-in-out transform bg-white -left-1 lg:w-1/4"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <button v-on:click="isOpen = false" class="focus:outline-none">
        <svg
          class="w-5 h-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div>
        <div class="mt-4 mb-8">
          <h2 class="block text-xs font-bold tracking-wider text-blue-800">
            VEOX
          </h2>
          <h1 class="block font-semibold text-gray-500 text-md">Attendance</h1>
        </div>
        <div>
          <h1 class="block mb-2 text-sm font-semibold text-gray-500">
            My workspaces
          </h1>
          <hr class="mb-4" />
          <nuxt-link
            to="/admin/workspace"
            v-if="workspaces.length == 0"
            class="mb-4 veox-btn-sm"
          >
            Create a new workspace
          </nuxt-link>
          <ul v-if="workspaces.length > 0">
            <li v-for="workspace in workspaces" :key="workspace.name">
              <button
                class="px-3 py-2 text-sm font-semibold text-gray-400 uppercase rounded hover:bg-gray-100 focus:outline-none"
              >
                <img
                  class="w-8 h-8 mr-2 rounded-sm"
                  v-bind:src="workspace.imageProfile"
                  v-bind:alt="workspace.imageProfile"
                />
                <span class="mt-1">
                  {{ workspace.name }}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-gray-800 opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'PrincipalDrawer',
  data: function () {
    return {
      workspaces: [],
    }
  },
  created() {
    this.getWorkspaces()
  },
  computed: {
    isOpen: {
      get() {
        return this.$store.state.isPrincipalPanel
      },
      set(_value) {
        this.$store.commit('SET_IS_PRINCIPAL_PANEL', false)
      },
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  methods: {
    closePrincipalDrawer() {
      this.$store.commit('SET_IS_PRINCIPAL_PANEL', false)
    },
    async getWorkspaces() {
      await this.$axios
        .get('workspaces')
        .then((res) => {
          this.workspaces = res.data.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
