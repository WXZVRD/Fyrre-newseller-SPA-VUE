<template>
  <div class="banner">
    <p class="banner__item">
      <span v-for="(text, index) in textCounts" :key="index" class="banner__text">{{ bannerTexts }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ScrollBanner",
  data() {
    return {
      bannerTexts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit +++",
      textCounts: 6
    };
  },
  computed: {
    animatedBannerTexts() {
      return this.bannerTexts.map((text, index) => ({
        text,
        delay: `${index * 3}s`
      }));
    }
  }
};
</script>

<style scoped>
.banner {
  padding: 20px 0;
  background: black;
  overflow: hidden;
}

.banner__item {
  white-space: nowrap;
  margin: 0;
}

.banner__text {
  font-family: "General Sans";
  display: inline-block;
  margin-right: 24px;
  color: #fff;
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
