<template>
    <ul class="posts" v-if="posts.length > 0">
        <h3 class="posts__title">Posts list</h3>

        <transition-group name="posts__list">
            <PostItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
        </transition-group>
    </ul>

    <h4 class="no__post-message" v-else>
        you have no posts created
    </h4>
</template>

<script>
import PostItem from '../PostItem/PostItem.vue'

export default {
    components: {
        PostItem,
    },

    props: {
        posts: {
            type: Array,
            require: true,
        }
    },

    emits: ['remove']
}
</script>





<style lang="scss" src="./style.scss" scoped/>
