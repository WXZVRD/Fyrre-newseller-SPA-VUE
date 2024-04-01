<template>
    <div class="social__links-footer">
      <a v-for="(item, idx) in socialItem" :key="idx" :href="item.linkTo" class="nav__bar-socials__item">
        <img :src="item.imgSrc" :alt="item.alt">
      </a>
    </div>
</template>

<script>
import socialItem from "@/Features/SocialLinks/socialLinks.data.js";

export default {
  data() {
    return {
      socialItem: socialItem
    };
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}

.social__links-footer{

}

.nav__bar-socials__item {
  font-family: "General Sans";
  font-weight: 400;
  font-size: 20px;
  color: #000;
  text-decoration: none;
  margin-right: 12px;
}
.nav__bar-socials__item:last-of-type {
  margin: 0;
}

.nav__bar-socials__item:hover {
  transform: translateY(-2px);
  transition: transform 0.3s;
}
</style>
