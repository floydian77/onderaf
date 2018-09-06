<template>
    <div>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Initiatives</th>
                    <th></th>
                    <th></th>
                    <!-- <th><button class="button is-small is-light" @click="create()">Add</button></th> -->
                </tr>
            </thead>
            <tbody>
                <list-item
                    v-for="initiative in initiatives"
                    :initiative="initiative"
                    :key="initiative.id"
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
            initiatives() { 
                return this.$store.getters.initiatives 
            }
        },
        methods: {
            create() {
                // this.$router.push('/initiatives/create/')
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