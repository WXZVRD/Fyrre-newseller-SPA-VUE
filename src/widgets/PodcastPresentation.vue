<template>
  <div class="podcast__presentation">
    <div class="podcast__left">
      <img :src="podcast.img" alt="podcast.imgAlt" class="podcast__img">
      <div class="podcast__socials">
        <h4 class="podcast__socials-title">FOLLOW</h4>
        <SocialLinks/>
      </div>
    </div>
    <div class="podcast__right">
      <h2 class="podcast__name">{{ podcast.title }}</h2>
      <Markdown :content="podcast.content"/>
    </div>
  </div>
</template>

<script>
import SocialLinks from "@/Features/SocialLinks/SocialLinks.vue";
import Markdown from "@/Features/Markdown.vue";
export default {
  name: "PodcastPresentation",
  components: {Markdown, SocialLinks},
  props: {
    podcast:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.podcast__presentation{
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 100px 0;
  flex-wrap: wrap;
}
.podcast__left{
  max-width: 350px;
  width: 100%;

  margin-right: 100px;
}
.podcast__img{
  width: 350px;
  height: 350px;

  padding-bottom: 48px;
  border-bottom: 1px solid #000;
}
.podcast__socials{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.podcast__socials-title{
  font-size: 20px;
  font-family: "General Sans";
  font-weight: 600;
}
.podcast__right{
  width: 100%;
  max-width: 750px;
}
.podcast__name{
  font-size: 104px;
  font-family: "General Sans";
  line-height: 110%;
  font-weight: 600;

  margin: 0;
}
</style>