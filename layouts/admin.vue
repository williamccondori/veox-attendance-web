<template>
  <div>
    <side-bar-principal />
    <div class="flex">
      <!-- Sidebar container -->
      <aside class="attendanace-sidebar flex | h-screen | sticky top-0">
        <div class="w-1/5">
          <side-bar-application />
        </div>
        <div class="w-4/5">
          <side-bar-workspace />
        </div>
      </aside>
      <!-- Main container -->
      <main class="attendanace-main">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import SideBarWorkspace from '~/components/admin/template/SideBarWorkspace.vue'
import SideBarApplication from '~/components/admin/template/SideBarApplication.vue'
import SideBarPrincipal from '~/components/admin/template/SideBarPrincipal.vue'
export default {
  components: { SideBarApplication, SideBarWorkspace, SideBarPrincipal },
}
</script>

<style scoped>
.attendanace-sidebar {
  width: 350px;
}
.attendanace-main {
  width: calc(100% - 350px);
}
</style>
