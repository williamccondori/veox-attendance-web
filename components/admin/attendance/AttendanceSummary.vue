<template>
  <div>
    <h1 class="veox-title">My coworkers</h1>
    <hr class="mb-4" />
    <table class="table-fixed w-full">
      <thead>
        <tr>
          <th class="py-2 w-1/6">Status</th>
          <th class="py-2 w-2/6">Collaborator</th>
          <th class="py-2 w-1/6">Group</th>
          <th class="py-2 w-1/6">Start hour</th>
          <th class="py-2 w-1/6">End hour</th>
        </tr>
      </thead>
      <tbody class="text-gray-500 text-sm">
        <tr
          class="hover:bg-gray-100 text-center"
          v-for="element in dailySummary"
          :key="element.id"
        >
          <td class="py-3">
            <span
              class="py-1 px-2 text-sm text-white font-semibold rounded"
              :class="element.isPresent ? 'bg-green-500' : 'bg-red-500'"
              >{{ element.isPresent ? 'Present' : 'Absent' }}</span
            >
          </td>
          <td class="py-3">{{ element.name }} {{ element.lastName }}</td>
          <td class="py-3">{{ element.groupName }}</td>
          <td class="py-3">{{ element.startHour }}</td>
          <td class="py-3">{{ element.endHour }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dailySummary: [
        {
          id: '1',
          name: 'William',
          lastName: 'Condori Quispe',
          groupName: 'Developers',
          startHour: '20:20',
          endHour: '20:20',
          isPresent: true,
        },
      ],
    }
  },
}
</script>

<style></style>
