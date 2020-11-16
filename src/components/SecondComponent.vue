<template>
  <p>true counter</p>
  <h1>{{ store.counter.value }}</h1>
  <button @click="store.addCount(2)">adadad(true counter + 2)</button>
  <h1>{{store.text.value}}</h1>
  <h1>{{store.textLength.value}}</h1>
  <p>{{store.textInfoObject.value}}</p>
</template>

<script>
import storeFunction from '../store';

export default {
  computed: {
    store() {
      return storeFunction();
    },
  },
};
</script>

<style>
</style>