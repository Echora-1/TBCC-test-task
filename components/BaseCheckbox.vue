<template>
  <label class="wrapper">
    {{label}}
    <input v-model='model' class="checkbox" type="checkbox" :name='name' :value="value" />
    <span class="checkmark">
      <check-mark />
    </span>
  </label>
</template>

<script>
import CheckMark from './icon/CheckMark'
export default {
  components: { CheckMark },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    "label": { type: String, default: "", required:true },
    "checked": { default: "" },
    "value": { default: undefined },
    "name": { type: String, default: "" },
  },
  computed: {
    model: {
      get() {
        return this.checked;
      },
      set(value) {
        this.$emit('change', value);
      },
    },
  }
}
</script>

<style  scoped>

.wrapper {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}

.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}


.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  border-radius: 20%;
  background-color: white;
  border: 2px solid #ccc;
  transition: all 0.5s;
}


.wrapper:hover input ~ .checkmark {
  border-color: rgba(0, 115, 210, 0.5);
}

.wrapper input:checked ~ .checkmark {
  background-color: #0073d2;
  border-color: #0073d2;
}

.wrapper:hover input ~ .checkmark > svg {
  fill: rgba(0, 115, 210, 0.5);
}

.checkmark > svg {
  position: absolute;
  fill: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
}

.wrapper input:checked ~ .checkmark > svg {
  fill: white;
}

</style>
