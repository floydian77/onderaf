<template>
        <!-- Columns: name, type, amount of entries -->
        <tr>
            <td>
                {{ category.name }}
            </td>
            <td>
                <router-link :to="urls.item">Edit category</router-link>
                <!-- <a href="#" @click="toItem">Edit entry</a> -->
            </td>
            <td>
                <!-- <a href="#" @click="remove">Remove entry</a> -->
                <!-- todo better alternative than js void? -->
                <a href="javascript:void(0)" @click="remove">Remove category</a>
            </td>
        </tr>
</template>

<script>
    export default {
        data() {
            return {
                // todo move hard-code url to config
                urls: {
                    item: '/categories/edit/' + this.category.id
                }
            }
        },
        props: ['category'],
        computed: {
        },
        created() {
            // console.log(this.category);
        },
        methods: {
            remove() {
                this.$store.dispatch('removeCategory', this.category.id)
            }
        }
    }
</script>

<style scoped>

</style>