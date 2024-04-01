<template>
  <div class="article__list">
    <ArticleCard
        v-for="(article, idx) in articles"
        :key="idx"
        :id="article.id"
        :label="article.label"
        :author="article.author"
        :img="article.img"
        :title="article.title"
        :date="article.date"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
        :duration="article.read"
    />
  </div>
</template>

<script>
import ArticleCard from "@/Entities/ArticleCard/SquareArticleCard.vue";
import useFetch from "@/Hooks/useFetch.js";

export default {
  components: { ArticleCard },
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    limit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      articles: [],
    }
  },
  mounted() {
    this.fetchArticles();
  },
  watch: {
    tags: {
      handler(newTags, oldTags) {
        this.fetchArticles();
      },
      deep: true
    }
  },
  methods: {
    async fetchArticles() {
      const { responseData, fetchData, error, isLoading } = useFetch();
      let filteredArray = [];

      await fetchData('src/json/articles.json');
      if (!error.value) {
        responseData.value.forEach(item => {
          item.articles.forEach(article => {
            if (
                this.tags.length === 0 ||
                this.tags.includes("ALL") ||
                this.tags.some(tag => article.label.toLowerCase() === tag.toLowerCase())
            ) {
              filteredArray.push(article);
            }
          });
        });

        this.articles = filteredArray;

        if (this.limit > 0 && this.articles.length > this.limit) {
          this.articles = this.articles.slice(0, this.limit);
        }
      } else {
        console.error('Error fetching data:', error.value);
      }
    }
  }
}

</script>

<style scoped>
.article__list{
  padding-top: 65px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1224px) {
  .article__list{
    padding-top: 65px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 768px) {
  .article__list{
    padding-top: 65px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>