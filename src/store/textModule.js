import { ref, computed } from "vue";

const text = ref('');
const textLength = computed(() => text.value.length);
const textInfoObject = ref({
    length: textLength,
    text: text
})

function changeText(value) {
    text.value = value;
}

export default () => {
    return {
        text, textLength, changeText, textInfoObject
    }
};