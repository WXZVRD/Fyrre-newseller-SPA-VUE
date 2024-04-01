<template>
  <div class="square__card">
    <img :src="img" alt="" class="square__card-img">
    <div class="square__card-right">
      <h2 class="square__card-title">{{ title }}</h2>
      <div class="square__card-info">
        <div v-if="job" class="square__card-info-data"><b style="margin-right: 10px;">Job</b>  {{ job }}</div>
        <div v-if="city" class="square__card-info-data"><b style="margin-right: 10px;">City</b>  {{ city }}</div>
        <div v-if="date" class="square__card-info-data"><b style="margin-right: 10px;">Date</b>  {{ date }}</div>
        <div v-if="read" class="square__card-info-data"><b style="margin-right: 10px;">Read</b>  {{ read }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    date: {
      type: String,
      required: false
    },
    read: {
      type: String,
      required: false
    },
  }
}
</script>

<style scoped>
.square__card{
  display: flex;
  align-items: center;

  border: 1px solid #000;
  padding: 32px;

  max-width: 690px;
}
.square__card:hover .square__card-img{
  transition: 0.3s;
  scale: 1.1;
}
.square__card-img{
  max-width: 150px;
  width: 100%;
  height: 150px;
  margin-right: 50px;
}
.square__card-right{
  flex-direction: column;
  width: 100%;

}
.square__card-title{
  font-size: 32px;
  line-height: 120%;
  font-family: "General Sans";
  font-weight: 600;

  margin: 0;
}
.square__card-info{
  display: flex;
  align-items: center;

  margin-top: 16px;
}
.square__card-info-data{
  font-size: 14px;
  line-height: 160%;
  font-weight: 400;
  font-family: "General Sans";

  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 10px;
}
</style>