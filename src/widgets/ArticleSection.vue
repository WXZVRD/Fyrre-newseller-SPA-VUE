<template>
  <section class="article__section">
    <div class="main__articles">
      <div class="main__article-list">
        <LinearArticleCard
            v-for="(article, idx) in articles.articles"
            :key="idx"
            :title="article.title"
            :read="article.read"
            :date="article.date"
            author="Jakob Grønberg"
            :tag="article.label"
            :img="article.img"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
            :isLast="idx === articles.articles.length - 1"
        />
      </div>

      <router-link style="text-decoration: none" to="/magazine">
        <Button link label="ALL ARTICLES"/>
      </router-link>
    </div>
    <div class="news__banners">
      <PrintMagazine/>
      <PopularArticles/>
      <NewsletterInbox/>
    </div>
  </section>
</template>
<script>

import NewsletterInbox from "@/Features/NewsletterInbox.vue";
import PrintMagazine from "@/Features/PrintMagazine.vue";
import PopularArticles from "@/widgets/PopularArticles.vue";
import LinearArticleCard from "@/Entities/ArticleCard/LinearArticleCard.vue";
import Button from "@/Shared/UI/Button.vue";
import useFetch from "@/Hooks/useFetch.js";
export default {
  components: {Button, LinearArticleCard, PopularArticles, PrintMagazine, NewsletterInbox},
  data() {
    return {
      articles: []
    };
  },
  async mounted() {
    const { responseData, fetchData, error, isLoading } = useFetch();

    await fetchData('src/json/articles.json');
    if (!error.value) {
      console.log(responseData.value[0].articles)
      this.articles = responseData.value[0];
      console.log(this.articles.articles)
    } else {
      console.error('Error fetching data:', error.value);
    }
  }
}
</script>

<style scoped>
.main__article-list {
  max-width: 1055px;
  width: 100%;
}
.article__card:last-child {
  border-bottom: none;
}
.article__section{
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}

.news__banners{
  margin-left: 20px;
}

@media (max-width: 1024px) {
  .article__section{
    flex-wrap: wrap;
  }
}
</style>