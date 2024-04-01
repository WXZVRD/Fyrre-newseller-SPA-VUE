<template>
  <button
      :style="style"
      @click="handleClick"
      :class="['button', {
        primary: primary,
        secondary: secondary,
        link: link
      }]"
  >
    {{ label }}
    <img v-if="link" style="margin-left: 10px;" src="@/assets/icons/ri_arrow-right-line.svg" alt="Arrow" class="arrow-icon">
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    },
    style: {
      type: String,
      required: false
    },
    link: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.onClick();
    }
  }
}
</script>

<style scoped>
  .button{
    padding: 15px 24px;

    width: max-content;

    font-family: "General Sans";
    font-size: 14px;
    font-weight: 500;

    border: none;
    transition: 0.5s;
  }
  .primary {
    background: #000;
    color: #fff;
  }
  .secondary{
    background: #fff;
    color: #000;
  }

  .primary:hover {
    background: #222;
  }
  .secondary:hover {
    background: #ddd;
  }
  .link{
    transition: ease-in-out 1s;
    background: none;

    align-items: center;
    display: flex;

    font-size: 16px;
    font-weight: 600;
    font-family: "General Sans";
  }

  .link:hover .arrow-icon {
    transition: 1s;
    transform: translateX(10px);
  }

</style>
