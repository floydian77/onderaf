<template>
        <!-- Columns: name, type, amount of entries -->
        <tr>
            <td>
                {{ initiative.name }}
            </td>
            <td>
                <router-link :to="urls.item">Edit initiative</router-link>
                <!-- <a href="#" @click="toItem">Edit entry</a> -->
            </td>
            <td>
                <!-- <a href="#" @click="remove">Remove entry</a> -->
                <!-- todo better alternative than js void? -->
                <a href="javascript:void(0)" @click="remove">Remove initiative</a>
            </td>
        </tr>
</template>

<script>
    export default {
        data() {
            return {
                // todo move hard-code url to config
                urls: {
                    item: '/initiatives/edit/' + this.initiative.id
                }
            }
        },
        props: ['initiative'],
        computed: {
        },
        created() {
            // console.log(this.initiative);
        },
        methods: {
            remove() {
                this.$store.dispatch('removeCategory', this.initiative.id)
            }
        }
    }
</script>

<style scoped>

</style>