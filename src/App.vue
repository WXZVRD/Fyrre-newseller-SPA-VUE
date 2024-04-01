<script setup>
import Footer from "@/widgets/Footer.vue";
import Container from "@/Shared/UI/Container.vue";
import Header from "@/widgets/Header/Header.vue";
</script>

<template>
  <div class="cover">
    <Header/>
    <Container standart>
      <router-view></router-view>
    </Container>
    <Footer/>
  </div>
</template>

<style scoped>
@import "global.css";

.cover{
  overflow: hidden;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
