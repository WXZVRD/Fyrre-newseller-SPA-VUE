<template>
  <div :class="['container', {
    standart: standart,
    lg: lg
  }]">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    lg: {
      type: Boolean,
      required: false
    },
    standart: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 100%;

  padding: 0 20px;
}

.standart {
  max-width: 1540px;
}

.lg {
  max-width: 1200px;
}
</style>
