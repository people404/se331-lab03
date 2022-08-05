<template>
  <div class="event-caor">
    <h4>Category:{{ event.category }}</h4>
    <h4>Organizer:{{ event.organizer }}</h4>
  </div>
</template>

<script>
export default {
  name: 'EventCaor',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-caor {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
}
.event-caor:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
