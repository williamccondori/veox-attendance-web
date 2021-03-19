<template>
  <div class="h-full p-10 bg-blue-900 dark:bg-gray-900">
    <div class="flex mb-10">
      <img
        src="https://placeimg.com/200/200/animals"
        alt="logo"
        class="w-10 h-10 mr-4 rounded-full"
      />
      <h1 class="text-gray-100 font-semibold text-xl uppercase my-1.5">VEOX</h1>
    </div>
    <ul>
      <li>
        <nuxt-link
          to="/admin/attendance"
          class="flex w-full p-3 text-sm font-semibold text-gray-100 rounded hover:bg-gray-900 hover:bg-opacity-10"
        >
          <svg
            class="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            /></svg
          >Attendance</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/admin/report"
          class="flex w-full p-3 text-sm font-semibold text-gray-100 rounded hover:bg-gray-900 hover:bg-opacity-10"
        >
          <svg
            class="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            /></svg
          >Reports</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/admin/request"
          class="flex w-full p-3 text-sm font-semibold text-gray-100 rounded hover:bg-gray-900 hover:bg-opacity-10"
          ><svg
            class="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
            /></svg
          >Requests</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
