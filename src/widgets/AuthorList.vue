<template>
  <AuthorCard
      v-for="(item, idx) in authorsList"
      :key="idx"
      :id="item.id"
      :img="item.avatar"
      :name="item.author"
      :job="item.job"
      :city="item.city"
      :style="{ borderBottom: idx !== authorsList.length - 1 ? '1px solid black' : 'none' }"
  />
</template>

<script>
import AuthorCard from "@/Entities/StandartCard.vue";
import PageTitle from "@/Entities/PageTitle.vue";
import useFetch from "@/Hooks/useFetch.js";
export default {
  name: "AuthorList",
  components: {PageTitle, AuthorCard},
  data() {
    return {
      authorsList: []
    }
  },

  mounted() {
    this.fetchAuthors()
  },

  methods: {
    async fetchAuthors() {
      const {responseData, fetchData} = useFetch()

      await fetchData('/src/json/articles.json')
      this.authorsList = responseData.value
    }
  }
}
</script>

<style scoped>

</style>