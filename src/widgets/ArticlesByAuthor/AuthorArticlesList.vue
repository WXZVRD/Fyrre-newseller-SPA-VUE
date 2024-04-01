<template>
  <div class="author__articles-list">
    <SquareCard
        v-for="(item, idx) in articleList"
        :key="idx"
        :date="item.date"
        :read="item.read"
        :title="item.title"
        :img="item.img"
        @click="goToArticle(item.title)"
    />
  </div>
</template>

<script>
import SquareCard from "@/Entities/SquareCard.vue";
export default {
  name: "AuthorArticlesList",
  components: {SquareCard},
  props: {
    articleList: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToArticle(title) {
      this.$router.push('/article/' + title)
    }
  },
}
</script>

<style scoped>
.author__articles-list{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 1224px) {
  .author__articles-list{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>