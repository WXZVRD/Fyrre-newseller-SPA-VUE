<template>
    <div @click="goToArticle" class="article__card">
      <div class="article__card-header">
        <p class="article__card-date">{{ date }}</p>
        <Label :label="label.toUpperCase()"/>
      </div>
      <img :src="img" alt="" class="article__card-img">
      <h2 class="article__card-title">{{ title }}</h2>
      <p class="article__card-text">{{ text }}</p>
      <div class="article__card-info">
        <div class="info__data"><b style="margin-right: 10px;">Text</b> {{ author }}</div>
        <div class="info__data"><b style="margin-right: 10px;">Duration</b> {{ duration }}</div>
      </div>
    </div>
</template>

<script>
import Label from "@/Shared/UI/Label.vue";
export default {
  name: "SquareArticleCard",
  components: {Label},
  props: {
    date: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true,
      default: "./src/assets/images/articles/preview/the-best-art-museums.jpg"
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
  },
  methods: {
    goToArticle() {
      this.$router.push('article/' + this.title)
    }
  }
}
</script>

<style scoped>
.article__card {
  padding: 40px;
  border: 1px solid #000;
  display: flex;
  justify-content: end;
  flex-direction: column;
  transform: translateY(20px);
  height: auto;

  transition: opacity 1s, transform 1s;
  animation: cardAppear 1s;
}

@keyframes cardAppear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.article__card:hover .article__card-img{
  transition: 0.4s;
  scale: 1.05;
}
.article__card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
}
.article__card-date{
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  font-family: "General Sans";

  margin: 0;
}
.article__card-title{
  font-size: 32px;
  line-height: 120%;
  font-weight: 600;
  font-family: "General Sans";

  margin: 32px 0 12px 0;
}
.article__card-text{
  font-size: 16px;
  font-family: "General Sans";
  font-weight: 400;
  line-height: 180%;

  margin: 0 0 50px 0;
}
.article__card-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info__data{
  font-size: 14px;
  line-height: 160%;
  font-weight: 400;
  font-family: "General Sans";

  display: flex;
  align-items: center;
  width: 100%;
}
</style>