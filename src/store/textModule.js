import { ref, computed } from "vue";

const text = ref('');
const textLength = computed(() => text.value.length);

function changeText(value) {
    text.value = value;
}

export default () => {
    return {
        text, textLength, changeText
    }
};