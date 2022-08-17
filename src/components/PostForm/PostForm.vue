<template>
    <form class="form" @submit.prevent>
        <h2 class="form__title">Create new post</h2>
        <MyInput placeholder="Name" v-model="post.title" v-focus />
        <MyInput placeholder="Description" v-model="post.body" />
        <MyButton class="add__post" @click="createPost">Add</MyButton>
    </form>
</template>

<script>
export default {

    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },

    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("createNewPost", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    },
}
</script>


<style lang="scss" src="./style.scss" scoped/>
