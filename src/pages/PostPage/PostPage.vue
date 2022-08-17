<template>
    <div>
        <h1 class="app__title">My post</h1>

        <MyInput class="search__post" placeholder="Search..." v-model="searchQuery" v-focus />

        <div class="app__inner">
            <MyButton class="create__new-post" @click="showModal">Create new post</MyButton>
            <SelectList v-model="selectedSort" :options="sortOption" />
        </div>

        <ModalWindow v-model:show="modalVisible">
            <PostForm @createNewPost="createPost" />
        </ModalWindow>

        <PostList :posts="searchAndSortedPost" @remove="removePost" v-if="!isPostLoading" />
        <p class="loading-placeholder" v-else>Loading...</p>

        <div class="observer" v-intersection="loadMorePost"></div>

        <!-- <div class="pages__wrapper">
            <p class="page" v-for="pageNumber in totalPages" :key="pageNumber"
                :class="{ 'current-page': page === pageNumber }" @click="changePage(pageNumber)">{{ pageNumber }}</p>
        </div> -->
    </div>
</template>

<script>
import PostForm from "@/components/PostForm/PostForm.vue";
import PostList from "@/components/PostList/PostList.vue";
import axios from "axios";

export default {
    components: {
        PostForm,
        PostList,
    },

    methods: {
        createPost(post) {
            this.posts.push(post);
            this.modalVisible = false;
        },

        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },

        showModal() {
            this.modalVisible = true;
        },

        // changePage(pageNumber) {
        //     this.page = pageNumber
        // },

        async fetchPost() {
            try {
                this.isPostLoading = true;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    { params: { _page: this.page, _limit: this.limit } }
                );
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = response.data;
            } catch (error) {
                console.error(error);
            } finally {
                this.isPostLoading = false;
            }
        },

        async loadMorePost() {
            try {
                this.page += 1;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    { params: { _page: this.page, _limit: this.limit } }
                );
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                this.posts = [...this.posts, ...response.data]
            } catch (error) {
                console.error(error);
            }
        },
    },

    data() {
        return {
            posts: [],
            modalVisible: false,
            isPostLoading: false,
            selectedSort: "",
            sortOption: [
                { value: "title", name: "by name", },
                { value: "body", name: "by content", },
            ],
            searchQuery: "",
            page: 1,
            limit: 10,
            totalPages: 0,
        };
    },

    mounted() {
        this.fetchPost();
    },

    computed: {
        sortedPost() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },

        searchAndSortedPost() {
            return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },

    watch: {
        // page() {
        //     this.fetchPost()
        // }
    }
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>
