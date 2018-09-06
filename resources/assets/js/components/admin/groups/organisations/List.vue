<template>
    <div>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Organisations</th>
                    <th></th>
                    <th></th>
                    <!-- <th><button class="button is-small is-light" @click="create()">Add</button></th> -->
                </tr>
            </thead>
            <tbody>
                <list-item
                    v-for="organisation in organisations"
                    :organisation="organisation"
                    :key="organisation.id"
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
            organisations() { 
                return this.$store.getters.organisations 
            }
        },
        methods: {
            create() {
                // this.$router.push('/organisations/create/')
            },
            update(id) {
            },
            del(id) {
            }
        },
        created() {
        },
        components: {
            ListItem
        }
    }

    
</script>

<style scoped>

</style>