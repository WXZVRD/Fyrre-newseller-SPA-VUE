<template>
  <div class="standart__card">
    <div class="standart__card-info">
      <img :src="img" alt="" class="standart__card-img">
      <h2 class="standart__card-name">{{ name }}</h2>
    </div>
    <div class="standart__card-bio">
      <div v-if="job" class="info__data"><b style="margin-right: 10px;">Job</b> {{ job }}</div>
      <div v-if="city" class="info__data"><b style="margin-right: 10px;">City</b> {{ city }}</div>
      <div v-if="date" class="info__data"><b style="margin-right: 10px;">Date</b> {{ date }}</div>
      <div v-if="duration" class="info__data"><b style="margin-right: 10px;">Duration</b> {{ duration }}</div>
      <Button @click="buttonFunc(id)" link :label="buttonTitle"/>
    </div>
  </div>
</template>

<script>
import Button from "@/Shared/UI/Button.vue";
export default {
  name: "StandartCard",
  components: {Button},
  props: {
    id: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    name: {
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
    duration: {
      type: String,
      required: false
    },
    buttonTitle: {
      type: String,
      required: true
    },
    buttonFunc: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    goToAuthor() {
      this.$router.push('/author/' + this.id)
    }
  }
}
</script>

<style scoped>
.standart__card{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  padding: 48px 0;
}
.standart__card:hover .standart__card-img{
  transition: 0.4s;
  scale: 1.05;
}
.standart__card-img{
  width: 150px;
  height: 150px;

  margin-right: 50px;
}
.standart__card-info{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.standart__card-name{
  font-size: 32px;
  line-height: 120%;
  font-family: "General Sans";
  font-weight: 600;
}
.standart__card-bio{
  display: flex;
  justify-content: flex-end;
}
.info__data{
  font-size: 14px;
  line-height: 160%;
  font-weight: 400;
  font-family: "General Sans";

  display: flex;
  align-items: center;
  max-width: 180px;
  width: 100%;
}

@media (max-width: 968px) {
  .standart__card{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .standart__card-bio{
    display: flex;
    justify-content: flex-start;
  }
}
</style>