  <template>
    <Hero
      descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam."
      :author="article.author"
      :label="article.label"
      :title="article.title"
      :date="article.date"
      :read="article.read"
      :img="article.img"
    />
    <div class="article__content">
      <AuthorInfoBlock
          :date="article.date"
          :img="author.avatar"
          :read="article.read"
          :name="article.author"
          style="margin-right: 64px;"
      />
      <Markdown :content="article.content"/>
    </div>
    <PostsList/>
  </template>

  <script>
  import PostsList from "@/widgets/LatestPostSection.vue";
  import AuthorInfoBlock from "@/Entities/AuthorInfoBlock.vue";
  import Hero from "@/widgets/Hero.vue";
  import Markdown from "@/Features/Markdown.vue";
  import useFetch from "@/Hooks/useFetch.js";
  import AuthorCard from "@/Entities/StandartCard.vue";

  export default {
    components: {AuthorCard, Markdown, Hero, AuthorInfoBlock, PostsList},
    data() {
      return {
        articleTitle: '',
        article: {},
        author: {}
      }
    },

    created() {
      this.articleTitle = this.$route.params.title
      this.fetchArticle()
    },

    methods: {
      async fetchArticle() {
        const { responseData, fetchData } = useFetch()
        await fetchData('src/json/articles.json')

        responseData.value.forEach(author => {
          author.articles.filter(article => {
            if (article.title === this.articleTitle) {
              this.article = article
              this.author = author
            }
          })
        })
      }
    }
  }
  </script>

  <style scoped>
  .article__content{
    max-width: 1000px;
    width: 100%;

    display: flex;
    justify-content: center;
    padding: 96px 0 100px 0;

    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .article__content{
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
