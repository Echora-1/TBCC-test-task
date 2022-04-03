<template>
  <button>
    <slot> </slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  background-color: #0073d2;
  padding: 5px 14px;
  border-radius: 5px;
  color: #fff;
  transition: background-color 0.5s;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #0050E0;
  }
  &:focus {
    outline: none;
  }
}
</style>
