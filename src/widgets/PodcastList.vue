<template>
  <div class="podcast__list">
    <StandartCard
        v-for="(item, idx) in podcastList"
        :style="{ borderBottom: idx !== podcastList.length - 1 ? '1px solid #000' : 'none' }"
        :key="idx"
        :id="item.id"
        :img="item.img"
        :name="item.title"
        :date="item.date"
        :duration="item.duration"
        button-title="LISTEN"
        :button-func="goToPodcast"
    />
  </div>
</template>

<script>
import StandartCard from "@/Entities/StandartCard.vue";
import useFetch from "@/Hooks/useFetch.js";
export default {
  name: "PodcastList",
  components: {StandartCard},
  data() {
    return {
      podcastList: []
    }
  },
  mounted() {
    this.fetchPodcasts()
  },
  methods: {
    async fetchPodcasts() {
      const { responseData, fetchData } = useFetch()
      await fetchData('src/json/podcast.json')

      this.podcastList = responseData.value
    },
    goToPodcast(id) {
      this.$router.push('/podcast/' + id)
    }
  }
}
</script>

<style scoped>
.podcast__list{
  padding: 0 0 100px 0;
}
</style>