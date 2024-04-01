<template>
  <div class="podcast">
    <div class="podcast__header">
      <h2 class="podcast__header-title">Authors</h2>
      <Button @click="goToAuthors" link label="ALL AUTHORS"/>
    </div>
    <div class="author__list">
      <SquareCard
          v-for="(item, idx) in authorsList"
          :key="idx"
          :title="item.author"
          :img="item.avatar"
          :city="item.city"
          :job="item.job"
          @click="goToAuthor(item.id)"
      />
    </div>
  </div>
</template>

<script>
import useFetch from "@/Hooks/useFetch.js";
import SquareCard from "@/Entities/SquareCard.vue";
import Button from "@/Shared/UI/Button.vue";

export default {
  components: {Button, SquareCard},
  data() {
    return{
      authorsList: []
    }
  },

  methods: {
    goToAuthor(id) {
      this.$router.push('/author/' + id)
    },
    goToAuthors() {
      this.$router.push('/authors')
    }
  },

  async mounted() {
    const { responseData, isLoading, error, fetchData } = useFetch()

    await fetchData('src/json/articles.json')
    this.authorsList = responseData.value
  }
}
</script>

<style scoped>
.podcast{
  padding: 50px 0 192px 0;
  border-top: 1px solid #000;
}
.podcast__header{
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 96px;
}
.podcast__header-title{
  font-size: 104px;
  line-height: 110%;
  font-weight: 600;
  font-family: "General Sans";

  margin: 0;
}
.author__list{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 900px) {
  .author__list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
