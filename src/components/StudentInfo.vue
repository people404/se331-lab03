<template>
  <div class="student-info">
    <h4>Name:{{ student.name }}</h4>
    <h4>SurName:{{ student.surname }}</h4>
    <h4>GPA:{{ student.gpa }}</h4>
  </div>
</template>

<script>
export default {
  name: 'StudentInfo',
  props: {
    student: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.student-info {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.student-info:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
