<template>
  <div class="markdown-editor">
    <div v-for="(item, index) in content" :key="index">
      <template v-if="item.summary">
        <div class="summary">
          <Markdown :source="item.summary" />
        </div>
      </template>
      <template v-if="item.section1">
        <div class="section">
          <Markdown :source="item.section1" />
        </div>
      </template>
      <template v-if="item.quote">
        <div class="quote">
          <Markdown :source="item.quote[0]" />
        </div>
      </template>
      <template v-if="item.summary2">
        <div class="summary">
          <Markdown :source="item.summary2" />
        </div>
      </template>
      <template v-if="item.section2">
        <Markdown :source="item.section2" />
      </template>
    </div>
  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
  components: {
    Markdown
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.quote {
  font-size: 48px;
  line-height: 120%;
  font-weight: 600;

  border-bottom: 1px solid #000;
  border-top: 1px solid #000;
  margin: 64px 0;
  padding-left: 74px;
  padding-right: 34px;
}

.summary {
  font-size: 20px;
  line-height: 180%;
  font-weight: 500;
}

.markdown-editor img {
  max-width: 100%;
}

.markdown-editor blockquote {
  margin: 0;
  padding: 0.5em 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}

.markdown-editor{
  width: 100%;

  font-family: "General Sans";
}

.markdown-editor p{
  font-size: 16px;
  line-height: 180%;
  font-weight: 400;
}

.section{
  font-size: 16px;
  line-height: 180%;
  font-weight: 400;
}
</style>
