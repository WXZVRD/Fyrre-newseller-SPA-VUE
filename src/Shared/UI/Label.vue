<template>
  <div
      @click="handleClick"
      :class="['tag', { 'clickable': isClickable, 'clicked': clicked }]">
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      isClickable: false,
      clicked: false
    };
  },
  methods: {
    handleClick() {
      if (this.isClickable) {
        if (this.onClick) {
          this.onClick();
        }
        this.clicked = !this.clicked;
      }
    }
  },
  mounted() {
    this.isClickable = typeof this.onClick === 'function';
  }
}
</script>

<style scoped>
.tag {
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 400;
  font-family: "General Sans";
}

.clickable:hover {
  transition: 0.4s;
  background: #000;
  color: #fff;
}

.clicked {
  background: #000;
  color: #fff;
}
</style>
