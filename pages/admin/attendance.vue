<template>
  <div>
    <attendance-form />
  </div>
</template>

<script>
import AttendanceForm from '~/components/admin/attendance/AttendanceForm.vue'
export default {
  layout: 'admin',
  head: {
    title: 'Attendance',
  },
  components: { AttendanceForm },
}
</script>

<style></style>
