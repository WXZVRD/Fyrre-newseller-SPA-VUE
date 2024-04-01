<template>
  <ScrollBanner/>
  <footer class="footer">
    <div class="footer__container">
      <div class="inbox__block">
        <h2 class="inbox__block-title">DESIGN NEWS TO YOUR INBOX</h2>
        <div class="submit__form">
          <input placeholder="email" type="email" class="submit__form-input">
          <Button
            label="SIGN UP"
            secondary
          />
        </div>
      </div>

      <nav class="footer__nav">
        <h3 class="footer__nav-title">FYRRE MAGAZINE</h3>

        <div class="footer__nav-colougne">
          <router-link class="footer__nav-colougne__item" to="/">
            Art
          </router-link>

          <router-link class="footer__nav-colougne__item" to="/">
            Design
          </router-link>

          <router-link class="footer__nav-colougne__item" to="/">
            Architecture
          </router-link>
        </div>

        <div class="footer__nav-colougne">
          <router-link class="footer__nav-colougne__item" to="/">
            Magazine
          </router-link>

          <router-link class="footer__nav-colougne__item" to="/">
            Podcast
          </router-link>

          <router-link class="footer__nav-colougne__item" to="/">
            Authors
          </router-link>
        </div>

        <div class="footer__nav-colougne">
          <router-link class="footer__nav-colougne__item" to="/">
            Styleguide
          </router-link>

          <router-link class="footer__nav-colougne__item" to="/">
            Licensing
          </router-link>

          <router-link class="footer__nav-colougne__item" to="/">
            Changelog
          </router-link>
        </div>
      </nav>

      <div class="footer__license">
        <div class="license">© Made by Pawel Gola - Powered by Webflow</div>

        <SocialLinksFooter is-white="true"/>
      </div>
    </div>
  </footer>
</template>

<script>
import ScrollBanner from "@/Entities/ScrollBanner.vue";
import SocialLinksFooter from "@/Features/SocialLinks/SocialLinksFooter.vue";
import Button from "@/Shared/UI/Button.vue";

export default {
  components: {Button, SocialLinksFooter, ScrollBanner}
}
</script>

<style scoped>
.license{
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  font-family: "General Sans";
}

.footer__license{
  margin-top: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__nav-colougne__item{
  color: #fff;
  text-decoration: none;
  line-height: 180%;
  font-size: 16px;
  font-weight: 400;
  font-family: "General Sans";

  display: block;

  margin-top: 24px;
}

.footer__nav{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer__nav-title{
  font-family: "General Sans";
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}

.footer__container {
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
}

.footer {
  padding-bottom: 65px;
  padding-top: 128px;
  width: 100%;
  background: black;
}

.inbox__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.inbox__block-title {
  font-family: "General Sans";
  font-weight: 600;
  font-size: 80px;
  line-height: 110%;
  color: #fff;

  width: 790px;
}

.submit__form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submit__form-input {
  padding: 10px 0 10px 15px;
  background: #fff;
  color: black;

  font-family: "General Sans";
  font-size: 16px;
  line-height: 180%;
  font-weight: 400;
  border: 0px;

  margin-right: 12px;
}

.submit__form-btn {
  font-family: "General Sans";
  font-size: 14px;
  font-weight: 500;
  color: black;

  padding: 15px 24px;
  background: #fff;
  border: none;
}
</style>