<template>
  <div class="podcast__card">
    <img :src="img" alt="" class="podcast__img">
    <h2 class="podcast__title">{{ title }}</h2>
    <div class="podcast__info">
      <div class="podcast__info-data"><b style="margin-right: 10px;">Date</b>  {{ date }}</div>
      <div class="podcast__info-data"><b style="margin-right: 10px;">Duration</b>  {{ read }}</div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    read: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>

.podcast__title{
  font-size: 32px;
  font-family: "General Sans";
  font-weight: 600;
  line-height: 120%;
  margin: 16px 0 0 0;
}
.podcast__img{
  width: 100%;
}
.podcast__card:hover .podcast__img{
  transition: 0.3s;
  scale: 1.05;
}
.podcast__info{
  display: flex;
  align-items: center;
}
.podcast__info-data{
  font-size: 14px;
  line-height: 160%;
  font-weight: 400;
  margin-top: 70px;
  font-family: "General Sans";

  display: flex;
  align-items: center;
  width: 100%;
}
.podcast__card{
  max-width: 400px;
  width: 100%;
  padding: 50px;

  border: 1px solid #000;
}
</style>