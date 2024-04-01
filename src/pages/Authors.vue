<template>
  <PageTitle img-alt="AUTHORS" img-src="/src/assets/images/titles/Authors.svg"/>
  <div class="author__list">
    <AuthorList/>
  </div>
</template>

<script>
import AuthorList from "@/widgets/AuthorList.vue";
import PageTitle from "@/Entities/PageTitle.vue";
export default {
  name: "Authors",
  components: {PageTitle, AuthorList}
}
</script>

<style scoped>
  .author__list{
    padding-bottom: 100px;
  }
</style>