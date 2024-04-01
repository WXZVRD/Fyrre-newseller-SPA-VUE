<template>
  <PageTitle img-alt="PODCASTS" img-src="/src/assets/images/titles/Podcast.svg"/>
  <PodcastList/>
</template>

<script>
import PageTitle from "@/Entities/PageTitle.vue";
import PodcastList from "@/widgets/PodcastList.vue";
export default {
  name: "Podcasts",
  components: {PodcastList, PageTitle}
}
</script>

<style scoped>

</style>