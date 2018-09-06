<template>
    <div>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Entries</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <!-- <th><button class="button is-small is-light" @click="create()">Add</button></th> -->
                </tr>
            </thead>
            <tbody>
                <list-item
                    v-for="entry in entries"
                    :entry="entry"
                    :key="entry.id"
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
            entries() { 
                return this.$store.getters.entries 
            }
        },
        methods: {
            create() {
                // this.$router.push('/form-entries/create/')
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