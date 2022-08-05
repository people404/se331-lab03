<template>
  <h4>Students information</h4>
  <div class="students">
    <StudentInfo
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>
<script>
import StudentInfo from '@/components/StudentInfo.vue'
import StudentService from '@/services/StudentService.js'
// import axios from 'axios'
export default {
  name: 'StudentView',
  components: {
    StudentInfo //register it as a child component
  },
  data() {
    return {
      students: null
    }
  },
  created() {
    StudentService.getStudents()
      .then((response) => {
        this.students = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
