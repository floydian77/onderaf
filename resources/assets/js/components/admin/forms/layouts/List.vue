<template>
    <div>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <!-- todo weird solution -->
                    <th>Layouts</th>
                    <th></th>
                    <th></th>
                    <th><button class="button is-small is-light" @click="create()">Add</button></th>
                </tr>
            </thead>
            <tbody>
                <list-item
                    v-for="layout in layouts"
                    :layout="layout"
                    :key="layout.name"
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
            layouts() { 
                return this.$store.getters.layouts 
            }
        },
        methods: {
            create() {
                // Go to url
                // todo use url names instead of path, doesn't work well somehow
                this.$router.push('/form-layouts/create')
            },
            read() {
            },
            update(name) {
            },
            del(name) {
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