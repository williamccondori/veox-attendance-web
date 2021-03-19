<template>
  <div class="p-20">
    <div class="flex space-x-10">
      <attendance-form class="w-full lg:w-1/2 mb-10" />
      <attendance-form class="w-full lg:w-1/2 mb-10" />
    </div>
    <attendance-summary class="w-full mb-10" />
  </div>
</template>

<script>
import AttendanceForm from '~/components/admin/attendance/AttendanceForm.vue'
import AttendanceSummary from '~/components/admin/attendance/AttendanceSummary.vue'

export default {
  layout: 'admin',
  head: {
    title: 'Attendance',
  },
  components: { AttendanceForm, AttendanceSummary },
}
</script>

<style></style>
