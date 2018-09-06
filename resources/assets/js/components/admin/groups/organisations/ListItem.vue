<template>
        <!-- Columns: name, type, amount of entries -->
        <tr>
            <td>
                {{ organisation.name }}
            </td>
            <td>
                <router-link :to="urls.item">Edit organisation</router-link>
                <!-- <a href="#" @click="toItem">Edit entry</a> -->
            </td>
            <td>
                <!-- <a href="#" @click="remove">Remove entry</a> -->
                <!-- todo better alternative than js void? -->
                <a href="javascript:void(0)" @click="remove">Remove organisation</a>
            </td>
        </tr>
</template>

<script>
    export default {
        data() {
            return {
                // todo move hard-code url to config
                urls: {
                    item: '/organisations/edit/' + this.organisation.id
                }
            }
        },
        props: ['organisation'],
        computed: {
        },
        created() {
            // console.log(this.organisation);
        },
        methods: {
            remove() {
                this.$store.dispatch('removeCategory', this.organisation.id)
            }
        }
    }
</script>

<style scoped>

</style>