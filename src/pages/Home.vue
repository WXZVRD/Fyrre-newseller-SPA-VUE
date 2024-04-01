<template>
  <PageTitle img-alt="ART & LIFE" :img-src="pageTitleImg"/>
  <ScrollBanner/>
  <Hero
      read="1 Min"
      date="16. March 2022"
      title="Don’t close your eyes"
      label="Label"
      author="Jakob Gronberg"
      img="/src/assets/images/articles/preview/dont-close-your-eyes.jpg"
      descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."/>
  <ArticleSection/>
  <PodcastSection/>
  <AuthorsSection/>
</template>

<script>
import Header from "@/widgets/Header/Header.vue";
import ScrollBanner from "@/Entities/ScrollBanner.vue";
import PageTitle from "@/Entities/PageTitle.vue";

import artLife from '@/assets/images/titles/Art&Life.svg'
import Footer from "@/widgets/Footer.vue";
import Hero from "@/widgets/Hero.vue";
import PopularArticles from "@/widgets/PopularArticles.vue";
import PrintMagazine from "@/Features/PrintMagazine.vue";
import ArticleSection from "@/widgets/ArticleSection.vue";
import AuthorsSection from "@/widgets/AuthorsSection.vue";
import PodcastSection from "@/widgets/PodcastSection.vue";

export default {
  name: "Home",
  components: {
    PodcastSection,
    AuthorsSection,
    ArticleSection,
    PrintMagazine, PopularArticles, Hero, Footer, PageTitle, ScrollBanner, Header},

  data() {
    return {
      pageTitleImg: artLife
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
