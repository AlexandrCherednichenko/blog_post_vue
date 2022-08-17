<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">select from the list</option>
        <option v-for="option of options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: "SelectList",

    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },

    methods: {
        changeOption(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
