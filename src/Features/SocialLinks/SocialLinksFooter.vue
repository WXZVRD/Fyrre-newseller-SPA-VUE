<template>
  <div class="social__links-container">
    <router-link v-for="(item, idx) in socialItem" :key="idx" :to="item.linkTo" class="nav__bar-socials__item">
      <img :src="isWhite ? item.imgSrcWhite : item.imgSrc" :alt="item.alt">
    </router-link>
  </div>
</template>

<script>
import socialItem from "@/Features/SocialLinks/socialLinks.data.js";

export default {
  props: {
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      socialItem: socialItem
    };
  }
}
</script>

<style scoped>
.social__links-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav__bar-socials__item {
  font-family: "General Sans";
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  margin-right: 12px;
}
</style>
