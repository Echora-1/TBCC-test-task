<template>
  <button @click='close'></button>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang='scss'>
button {
  min-width: 30px;
  min-height: 8px;
  position: relative;
  justify-self: center;
  padding: 15px 0;
  border: none;
  background: transparent;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 30px;
    border-radius: 2px;
    background: black;
    left: 0;
  }

  &::before {
    top: calc(50% - 2px);
    transform: rotate(45deg);
  }

  &::after {
    bottom: 50%;
    transform: rotate(135deg);
  }
}
</style>
