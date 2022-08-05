<template>
  <h1>Event For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- <EventCaor v-for="event in events" :key="event.id" :event="event" /> -->
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
//import EventCaor from '@/components/EventCaor.vue'
import EventService from '@/services/EventService.js'
// import axios from 'axios'
export default {
  name: 'EventListView',
  components: {
    EventCard //register it as a child component
    //EventCaor //register it as a child component
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
