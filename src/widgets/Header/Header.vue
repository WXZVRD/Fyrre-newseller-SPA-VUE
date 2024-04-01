<template>
  <Container standart>
    <header class="header">

      <div class="header__logo">
        <router-link class="header__logo--item" to="/">FYRRE MAGAZINE</router-link>
      </div>

      <div class="nav__bar">

        <div class="nav__bar-pages">
          <router-link v-for="(item, idx) in pagesLinks"  :key="idx" class="nav__bar-pages__item" :to="item.path">
            {{ item.title }}
          </router-link>
        </div>

        <div class="sep__line"></div>

        <div class="nav__bar-socials">
          <SocialLinks/>
        </div>

      </div>
    </header>
  </Container>
</template>

<script>
import socialItem from "@/Features/SocialLinks/socialLinks.data.js";
import pagesLinks from "@/widgets/Header/pagesLinks.data.js";
import SocialLinks from "@/Features/SocialLinks/SocialLinks.vue";
import Container from "@/Shared/UI/Container.vue";

export default {
  components: {SocialLinks, Container},
  data() {
    return {
      socialItem: socialItem,
      pagesLinks: pagesLinks
    };
  }
}
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 16px;
    padding-top: 34px;

    border-bottom: 1px solid black;
  }

  .sep__line{
    width: 15px;
    height: 1px;
    background: black;
    margin-right: 24px;
  }

  .header__logo--item{
    font-family: "General Sans";
    font-weight: 700;
    font-size: 20px;
    color: #000;

    text-decoration: none;
  }

  .nav__bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__bar-pages{
    display: flex;
  }

  .nav__bar-pages__item{
    font-family: "General Sans";
    font-weight: 400;
    font-size: 20px;
    color: #000;

    text-decoration: none;

    margin-right: 24px;
  }
  .nav__bar-pages__item:hover {
    transform: translateY(-2px);
    transition:  transform 0.3s;
  }

</style>
