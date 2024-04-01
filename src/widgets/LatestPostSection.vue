<template>
  <div class="podcast">
    <div class="podcast__header">
      <h2 class="podcast__header-title">LATEST POSTS</h2>
      <Button @click="goToArticles" link label="SEE ALL"/>
    </div>
    <ArticleList limit="3"/>
  </div>
</template>

<script>
import Button from "@/Shared/UI/Button.vue";
import ArticleList from "@/widgets/ArticleList.vue";
export default {
  name: "LatestPostSection",
  components: {ArticleList, Button},
  methods: {
    goToArticles() {
      this.$router.push('/magazine')
    }
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

}
.podcast__header-title{
  font-size: 104px;
  line-height: 110%;
  font-weight: 600;
  font-family: "General Sans";

  margin: 0;
}
</style>