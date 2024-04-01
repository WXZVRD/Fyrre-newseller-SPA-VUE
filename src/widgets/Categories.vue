<template>
  <div class="category__filter">
    <h2 class="category__filter-text">CATEGORIES</h2>

    <div class="filters">
      <Label
          v-for="(item, idx) in filtersValues"
          :key="idx"
          :label="item.title"
          style="margin-left: 10px;"
          @click="handleFilterClick(item.title)"
      />
    </div>
  </div>
</template>

<script>
import Label from "@/Shared/UI/Label.vue";

export default {
  components: {Label},
  data() {
    return {
      filtersValues: [
        {
          title: 'ALL',
          function: () => {
            console.log('Filter ALL clicked');
          }
        },
        {
          title: 'ART',
          function: () => {
            console.log('Filter ART clicked');
          }
        },
        {
          title: 'STREET ART',
          function: () => {
            console.log('Filter STREET ART clicked');
          }
        },
        {
          title: 'SCULPTURES',
          function: () => {
            console.log('Filter SCULPTURES clicked');
          }
        }
      ]
    }
  },
  methods: {
    handleFilterClick(filterTag) {
      this.$emit('changedFilters', filterTag)
    }
  }
}
</script>

<style scoped>
.category__filter{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.category__filter-text{
  font-size: 16px;
  font-weight: 600;
  font-family: "General Sans";
}
.filters{
  display: flex;
}
</style>
