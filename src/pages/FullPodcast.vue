<template>
  <PodcastPresentation :podcast="podcast"/>
  <PodcastSection/>
</template>

<script>
import PodcastPresentation from "@/widgets/PodcastPresentation.vue";
import useFetch from "@/Hooks/useFetch.js";
import PodcastSection from "@/widgets/PodcastSection.vue";
export default {
  name: "FullPodcast",
  components: {PodcastSection, PodcastPresentation},
  data() {
    return {
      podcast: {}
    }
  },
  created() {
    this.fetchPodcast()
  },
  methods: {
    async fetchPodcast() {
      const {responseData, fetchData} = useFetch()
      const podcastId = this.$route.params.id
      await fetchData('/src/json/podcast.json')

      const podcastIdx = responseData.value.findIndex(podcast => podcast.id == podcastId)
      this.podcast = responseData.value[podcastIdx]
    }
  }
}
</script>

<style scoped>

</style>