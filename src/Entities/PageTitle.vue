<template>
  <div class="page__title-container">
    <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt" class="page__title-image" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    imgAlt: String
  }
}
</script>

<style scoped>

.page__title-image{
  height: 100%;
  width: 100%;
}

.page__title-container {
  max-width: 95rem;
  width: 100%;
  margin: 50px auto;
}

.page__title {
  width: 100%;
  height: 215px;
  font-family: "General Sans";
  font-weight: 400;
  font-size: 17rem;
  color: black;
  margin: 0;
  margin-bottom: 50px;
}
</style>
