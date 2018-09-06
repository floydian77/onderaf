<template>
        <!-- Columns: name, type, amount of entries -->
        <tr>
            <td>
                {{ layout.name }}
            </td>
            <td>
                <router-link :to="urls.editLayout">Edit layout</router-link>
            </td>
            <td>
                <a href="javascript:void(0)" @click="remove">Remove layout</a>
            </td>
            <td>
                <router-link :to="urls.addEntry">Add entry</router-link>
                <!-- <button class="button is-small is-light" @click="create()">Add entry</button> -->
            </td>
        </tr>
        <!-- <div class="columns">
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
        </div> -->
</template>

<script>
    export default {
        data() {
            return {
                // todo move hard-code url to config
                urls: {
                    editLayout: '/form-layouts/edit/' + this.layout.id,
                    addEntry: '/form-entries/create/'
                }
            }
        },
        props: ['layout'],
        computed: {
            // todo temp
            entries() {
                return 0
            }
        },
        created() {
        },
        methods: {
            remove() {
                this.$store.dispatch('removeLayout', this.layout.name)
            },
            addEntry() {

            }
        }
    }
</script>

<style scoped>

</style>