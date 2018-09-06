<template>
    <div>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Categories</th>
                    <th></th>
                    <th></th>
                    <!-- <th><button class="button is-small is-light" @click="create()">Add</button></th> -->
                </tr>
            </thead>
            <tbody>
                <list-item
                    v-for="category in categories"
                    :category="category"
                    :key="category.id"
                ></list-item>
            </tbody>
        </table>
    </div>
</template>

<script>

    import ListItem from "./ListItem.vue";

    export default {

        // todo works?

        data() {
            return {
            }
        }, 
        computed: {
            categories() { 
                return this.$store.getters.categories 
            }
        },
        methods: {
            create() {
                // this.$router.push('/categories/create/')
            },
            read() {
            },
            update(id) {
            },
            del(id) {
            }
        },
        created() {
            this.read();
        },
        components: {
            ListItem
        }
    }

    
</script>

<style scoped>

</style>