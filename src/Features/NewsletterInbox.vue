<template>
  <div class="newsletter__inbox">
    <h3 class="newsletter__inbox-subtitle">NEWSLETTER</h3>
    <h2 class="newsletter__inbox-title">Design News to your inbox</h2>
    <input v-model="submitText" placeholder="email" type="email" class="newsletter__inbox-input">
    <Button style="margin-left: auto" @click="onSubmit" label="SIGN UP" primary/>
  </div>
</template>

<script>
import Button from "@/Shared/UI/Button.vue";
export default {
  components: {Button},
  data() {
    return {
      submitText: ''
    }
  },

  methods: {
    onSubmit() {
      alert(`You are submited next text [${this.submitText}]`)
    }
  }
}
</script>

<style scoped>
  .newsletter__inbox-input{
    padding: 10px 0 10px 15px;
    background: #fff;
    color: black;

    font-family: "General Sans";
    font-size: 16px;
    line-height: 180%;
    font-weight: 400;
    border: 0px;

    margin-bottom: 12px;
  }
  .newsletter__inbox-title{
    font-size: 32px;
    line-height: 130%;
    font-weight: 600;
    font-family: "General Sans";
    margin-bottom: 16px;
  }
  .newsletter__inbox-subtitle{
    font-size: 16px;
    font-weight: 600;
    font-family: "General Sans";

    margin-bottom: 8px;
  }
  .newsletter__inbox{
    display: flex;
    flex-direction: column;

    background: #F8F8F8;
    padding: 32px;
    margin: 32px 0;

    width: 306px;
  }
</style>