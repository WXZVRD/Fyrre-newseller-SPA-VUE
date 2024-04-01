<template>
  <div class="print">
    <h3 class="print__title">PRINTMAGAZINE</h3>
    <img :src="image" alt="Fyrre_magazine" class="print__img">
    <Button style="margin-top: 10px;" primary label="SIGN UP"/>
  </div>
</template>

<script>
import image from "@/assets/images/homepage/magazine-cover.jpg"
import Button from "@/Shared/UI/Button.vue";
export default {
  components: {Button},
  data() {
    return {
      image: image
    }
  }
}
</script>

<style scoped>
.print__img{
  width: 100%;
  height: auto;
}
.print{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 32px 0;
}
.print__title {
  font-size: 16px;
  font-weight: 600;
  font-family: "General Sans";

  margin-bottom: 16px;
}
</style>