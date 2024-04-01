<template>
  <div class="popular__articles">
    <h2 class="popular__articles-title">MOST POPULAR</h2>
    <div class="popular__articles-list">
      <div v-if="popularArticles.length" v-for="(article, idx) in popularArticles" :key="idx" @click="goToArticle(article.title)">
        <div class="popular__article-item" :style="{ borderBottom: idx !== popularArticles.length - 1 ? '1px solid black' : 'none' }">
          <h2 class="popular__article-item__num">0{{ article.id }}</h2>
          <div class="popular__article-item__content">
            <h2 class="popular__article-item__content-title">{{ article.title }}</h2>
            <h4 class="popular__article-item__content-text"><b style="margin-right: 8px;">Text</b> {{ article.author }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useFetch from "@/Hooks/useFetch.js";

export default {
  data() {
    return {
      popularArticles: [],
    }
  },

  methods: {
    goToArticle(title) {
      this.$router.push('/article/' + title)
    }
  },

  async mounted() {
    const { responseData, fetchData } = useFetch();
    try {
      let id = 1
      await fetchData('src/json/articles.json');
      const newPopularArticles = responseData.value
          .flatMap(author => author.articles.filter(article => article.popular)
              .map(article => ({
                id: id++,
                author: author.author,
                title: article.title
              }))
          );
      this.popularArticles = this.popularArticles.concat(newPopularArticles);
    } catch (e) {
      alert('Ошибка!');
    }
  }
}
</script>

<style scoped>
.popular__articles{
  max-width: 370px;
  width: 100%;

  margin: 62px 0;
}

.popular__articles-title{
  margin-bottom: 32px;

  font-weight: 600;
  font-family: "General Sans";
  font-size: 16px;
}


.popular__article-item{
  display: flex;

  padding: 24px 0;
}
.popular__article-item__num{
  font-family: "General Sans";
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  margin: 0 50px 0 0;
}
.popular__article-item__content-title{
  font-family: "General Sans";
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  margin: 0 0 16px 0;
}

.popular__article-item__content-text{
  font-family: "General Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  margin: 0;
}
</style>
