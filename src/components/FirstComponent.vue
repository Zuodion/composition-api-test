<template>
  <p>double Counter</p>
  <h1>{{ store.double.value }}</h1>
  <button @click="store.addCount(1)">adadad(true counter + 1)</button>
  <input :value="store.text.value" @input="store.changeText($event.target.value)">
</template>

<script>
import storeFunction from '../store';

export default {
  computed: {
    store() {
      return storeFunction();
    }
  }
};
</script>

<style>
</style>