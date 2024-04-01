<template>
  <div class="author__presentation">
    <div class="author__left">
      <img :src="author.avatar" alt="author.imgAlt" class="author__img">
      <div class="author__socials">
        <h4 class="author__socials-title">FOLLOW</h4>
        <SocialLinks/>
      </div>
    </div>
    <div class="author__right">
      <h2 class="author__name">{{ author.author }}</h2>
      <Markdown :content="[author.biography]"/>
    </div>
  </div>
</template>

<script>
import SocialLinks from "@/Features/SocialLinks/SocialLinks.vue";
import Markdown from "@/Features/Markdown.vue";
export default {
  name: "AuthorPresentation",
  components: {Markdown, SocialLinks},
  props: {
    author:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.author__presentation{
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 100px 0;
  flex-wrap: wrap;
}
.author__left{
  max-width: 350px;
  width: 100%;

  margin-right: 100px;
}
.author__img{
  width: 350px;
  height: 350px;

  padding-bottom: 48px;
  border-bottom: 1px solid #000;
}
.author__socials{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.author__socials-title{
  font-size: 20px;
  font-family: "General Sans";
  font-weight: 600;
}
.author__right{
  width: 100%;
  max-width: 750px;
}
.author__name{
  font-size: 104px;
  font-family: "General Sans";
  line-height: 110%;
  font-weight: 600;

  margin: 0;
}
</style>