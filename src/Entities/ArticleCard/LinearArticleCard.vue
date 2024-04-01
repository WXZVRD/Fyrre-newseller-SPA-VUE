<template>
  <div
      style=""
      :class="{ 'no-border': isLast, 'article__card': true }"
      @click="goToArticle"
  >
    <img :src="this.img" alt="article card image" class="article__card-img">
    <div class="article__card-content">
      <h2 class="article__card-content__title">{{ title }}</h2>
      <p class="article__card-content__text">
        {{ text }}
      </p>
      <div class="full__info">
        <div class="content">
          <div class="full__info-data "><b style="margin-right: 10px;">Text</b>  {{ author }}</div>
          <div class="full__info-data "><b style="margin-right: 10px;">Date</b>  {{ date }}</div>
          <div class="full__info-data "><b style="margin-right: 10px;">Duration</b>  {{ read }}</div>
        </div>
        <Label :label="tag.toUpperCase()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Label from "@/Shared/UI/Label.vue";
export default {
  name: "LinearArticleCard",
  components: {Label},
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    author:{
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    read: {
      type: String,
      required: true
    },
    isLast: {
      type: Boolean,
    }
  },
  methods: {
    goToArticle() {
      this.$router.push('/article/' + this.title)
    }
  }
}
</script>

<style scoped>

.article__card-content__title{
  font-family: "General Sans";
  font-size: 32px;
  font-weight: 600;

  margin: 0;
}
.article__card-content__text{
  font-size: 16px;
  font-family: "General Sans";
  line-height: 180%;
  font-weight: 400;
  margin: 12px 0 0 0;
}
.full__info{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.content{
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  width: 100%;
  margin-top: 70px;
  flex-wrap: wrap;

  margin-right: 20px;
}
.full__info-data{
  font-size: 14px;
  line-height: 160%;
  font-weight: 400;
  font-family: "General Sans";
}
.article__card{
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 50px 0;
  border-bottom: 1px solid black;

  max-width: 1055px;
  width: 100%;
}
.article__card:hover .article__card-img{
  transition: 0.3s;
  scale: 1.1;
}
.article__card-img{
  width: 240px;
  height: 240px;
  margin-right: 50px;
}
.article__card-content{

}
</style>