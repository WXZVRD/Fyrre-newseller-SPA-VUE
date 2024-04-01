<template>
  <div class="podcast">
    <h2 class="podcast__header-title">Articles by {{ author.author }}</h2>
    <AuthorArticlesList :article-list="author.articles"/>
  </div>
</template>

<script>
import Button from "@/Shared/UI/Button.vue";
import AuthorArticlesList from "@/widgets/ArticlesByAuthor/AuthorArticlesList.vue";
export default {
  name: "AuthorArticles",
  components: {AuthorArticlesList, Button},
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.podcast{
  padding: 50px 0 192px 0;
  border-top: 1px solid #000;
}
.podcast__header-title{
  font-size: 72px;
  line-height: 110%;
  font-weight: 600;
  font-family: "General Sans";

  margin: 0 0 50px 0;
}
</style>