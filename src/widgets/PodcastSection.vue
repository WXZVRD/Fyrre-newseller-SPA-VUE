<template>
  <div class="podcast">
    <div class="podcast__header">
      <h2 class="podcast__header-title">PODCAST</h2>
      <Button @click="goToEpisodes" link label="ALL EPISODES"/>
    </div>
    <div class="podcast__list">
      <PodcastCard
          v-for="(item, idx) in podcastList.slice(0, 3)"
          @click="goToPodcast(item.id)"
          :key="idx"
          :read="item.duration"
          :date="item.date"
          :img="item.img"
          :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import useFetch from "@/Hooks/useFetch.js";
import PodcastCard from "@/Entities/PodcastCard.vue";
import Button from "@/Shared/UI/Button.vue";

export default {
  name: "PodcastSection",
  components: {Button, PodcastCard},
  data() {
    return{
      podcastList: []
    }
  },
  methods: {
    goToPodcast(id) {
      this.$router.push('/podcast/' + id)
    },
    goToEpisodes() {
      this.$router.push('/podcasts')
    }
  },
  async mounted() {
    const { responseData, isLoading, error, fetchData } = useFetch()

    await fetchData('src/json/podcast.json')
    this.podcastList = responseData.value
  }
}
</script>

<style scoped>
.podcast{
  padding: 50px 0 192px 0;
  border-top: 1px solid #000;
}
.podcast__header{
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 96px;
}
.podcast__header-title{
  font-size: 104px;
  line-height: 110%;
  font-weight: 600;
  font-family: "General Sans";

  margin: 0;
}
  .podcast__list{
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1550px) {
    .podcast__list{
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 1024px) {
    .podcast__list{
      text-align: center;
      place-items: center;
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>