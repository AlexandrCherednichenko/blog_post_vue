<template>
    <input class="input" type="text" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    name: 'MyInput',

    props: {
        modelValue: [String, Number]
    },

    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>


<style lang="scss" src="./style.scss" scoped/>
