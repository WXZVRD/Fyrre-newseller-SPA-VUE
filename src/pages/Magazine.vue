<template>
  <div class="magazine__container">
    <PageTitle :img-src="pageImage" img-alt="Magazines"/>
    <Categories @changedFilters="filterTags"/>
    <ArticleList :tags="activeTags"/>
  </div>
</template>

<script>
import PageTitle from "@/Entities/PageTitle.vue";
import pageImage from "@/assets/images/titles/Magazine.svg"
import Categories from "@/widgets/Categories.vue";
import ArticleList from "@/widgets/ArticleList.vue";

export default {
  components: {ArticleList, Categories, PageTitle},

  data() {
    return {
      pageImage: pageImage,
      activeTags: []
    }
  },

  methods: {
    filterTags(tag) {
      const index = this.activeTags.indexOf(tag);
      if (index !== -1) {
        this.activeTags.splice(index, 1);
      } else {
        this.activeTags.push(tag);
      }
    }
  }
}
</script>

<style scoped>
.magazine__container {
  padding-bottom: 200px;
}
</style>
