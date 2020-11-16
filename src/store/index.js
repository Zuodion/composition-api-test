import { ref, computed } from "vue";

import createTextModule from './textModule';
const textStore = createTextModule();

const counter = ref(0);
const double = computed(() => counter.value * 2);

function addCount(value) {
    counter.value += value;
}

export default () => {
    return {
        counter, double, addCount, ...textStore
    };
};