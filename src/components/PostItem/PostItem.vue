<template>
    <li class="post__item">
        <div class="post__item-content">
            {{ post.id }}
            <span><strong>Post name:</strong> {{ post.title }}</span>
            <span><strong>Post body:</strong> {{ post.body }}</span>
        </div>

        <div class="post__item-btn">
            <MyButton class="post__item-btn-remove" @click="$emit('remove', post)">Remove</MyButton>
            <MyButton class="post__item-btn-view" @click="$router.push(`/posts/${post.id}`)">View</MyButton>
        </div>
    </li>
</template>

<script>
export default {

    props: {
        post: {
            type: Object,
            require: true
        }
    },

    emits: ['remove']

}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
