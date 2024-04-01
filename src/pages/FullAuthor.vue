<template>
  <AuthorPresentation :author="author"/>
  <AuthorArticles :author="author"/>
</template>

<script>
import AuthorArticles from "@/widgets/ArticlesByAuthor/AuthorArticles.vue";
import useFetch from "@/Hooks/useFetch.js";
import AuthorPresentation from "@/widgets/AuthorPresentation.vue";
export default {
  name: "FullAuthor",
  components: {AuthorPresentation, AuthorArticles},
  data() {
    return {
      author: {}
    }
  },
  created() {
    this.fetchAuthor()
  },
  methods: {
    async fetchAuthor() {
      const {responseData, fetchData} = useFetch()
      const authorId = this.$route.params.id
      await fetchData('/src/json/articles.json')

      const authorIdx = responseData.value.findIndex(author => author.id == authorId)
      this.author = responseData.value[authorIdx]
    }
  }
}
</script>

<style scoped>

</style>