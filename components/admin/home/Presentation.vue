<template>
  <div class="bg-gray-100 flex p-12 rounded">
    <img
      class="w-52 h-52 mr-12"
      src="https://d301sr5gafysq2.cloudfront.net/frontbucket/assets/present/empty-state.43f18054.svg"
      alt="folder"
    />
    <div>
      <h1 class="veox-title">Welcome to Attendance! Let's get started</h1>
      <p class="text-md text-gray-600 | mb-5">
        <span class="text-gray-500 font-semibold">Attendance</span> is an
        attendance control software focused on productivity, easy to use and
        with the necessary tools to keep track of your collaborators' work.
      </p>
      <NuxtLink to="/admin/workspace" class="veox-btn"
        >Let's start by creating a workspace</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>
