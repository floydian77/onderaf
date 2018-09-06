<template>
        <!-- Columns: name, type, amount of entries -->
        <tr>
            <td>
                {{ entry.formLayout }}
            </td>
            <td>
                <router-link :to="urls.item">Edit entry</router-link>
                <!-- <a href="#" @click="toItem">Edit entry</a> -->
            </td>
            <td>
                <router-link :to="urls.match">Match entry</router-link>
                <!-- <a href="#" @click="toItem">Edit entry</a> -->
            </td>
            <td>
                <!-- <a href="#" @click="remove">Remove entry</a> -->
                <!-- todo better alternative than js void? -->
                <a href="javascript:void(0)" @click="remove">Remove entry</a>
            </td>
        </tr>
</template>

<script>
    export default {
        data() {
            return {
                // todo move hard-code url to config
                urls: {
                    item: '/form-entries/edit/' + this.entry.formLayout + '/' + this.entry.id,
                    match: '/form-entries/match/' + this.entry.formLayout + '/' + this.entry.id
                }
            }
        },
        props: ['entry'],
        computed: {
        },
        created() {
            // console.log(this.entry);
        },
        methods: {
            remove() {
                // this.$store.dispatch('removeEntry', this.entry.id)
                this.$store.dispatch('entryRemove', this.entry.id)
            }
        }
    }
</script>

<style scoped>

</style>