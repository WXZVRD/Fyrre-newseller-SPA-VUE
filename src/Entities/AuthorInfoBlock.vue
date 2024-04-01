<template>
  <div class="author__info-block">
    <div class="author__info-block__header">
      <img :src="img" alt="" class="author__info-block__header-avatar">
      <h2 class="author__info-block__header-name">{{ name }}</h2>
    </div>
    <div class="author__info-block__footer">
        <div class="full__info-data "><b style="margin-bottom: 16px;">Date</b> {{ date }}</div>
        <div class="full__info-data "><b style="margin-bottom: 16px;">Read</b> {{ read }}</div>
        <div class="full__info-data ">
          <b>Share</b>
          <SocialLinks/>
        </div>
    </div>
  </div>
</template>

<script>
import SocialLinks from "@/Features/SocialLinks/SocialLinks.vue";
export default {
  name: "AuthorInfoBlock",
  components: {SocialLinks},
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
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
    }
  }
}
</script>

<style scoped>
.author__info-block{
  max-width: 280px;
  width: 100%;

  margin-bottom: 50px;
}
.author__info-block__header{
  display: flex;

  padding-bottom: 32px;
  border-bottom: 1px solid #000;
}
.author__info-block__header-avatar{
  width: 80px;
  height: 80px;

  margin-right: 20px;
}
.author__info-block__header-name{
  font-family: "General Sans";
  font-size: 32px;
  line-height: 120%;
  font-weight: 600;

  margin: 0;
}

.author__info-block__footer{
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 30px;
}
.full__info-data {
  font-size: 14px;
  line-height: 160%;
  font-weight: 400;
  font-family: "General Sans";

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
</style>