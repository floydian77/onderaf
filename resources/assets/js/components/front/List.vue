<template>
    <div>
        <div v-if="loaded">
            <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            Formulier
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="item in items"
                            :key="item.id"
                        >
                            Rij
                            <router-link tag="button" :to="urls.CREATE"> 
                                {{ item.name }}
                            </router-link>
                        </tr>
                    </tbody>
            </table>
            <!-- todo extract if check to config -->
        </div>
        <div v-else>
            <!-- Add loading state -->
            ...
        </div>
    </div>
</template>

<script>
    // import ListItem from "./ListItem.vue";
    // import Table from "../table/Table.vue";
    // import Row from "../table/Row.vue";
    import { Models, ModelLabels, ModelRoutingLabelsAndUrls } from "../../../../config.js"

    export default {

        props: ['modelName'],

        data() {
            return {
                component: ListItem
            }
        }, 
        computed: {
            model() {
                return Models[this.modelName]
            },
            properties() {
                return this.model.properties
            },
            items() { 
                return this.$store.getters[this.modelName]
            },
            urls() { 
                return ModelRoutingLabelsAndUrls(this.modelName, this.model.domain || null).urls 
            },
            labels() { 
                return ModelLabels(this.modelName) 
            },
            loaded() { 
                return this.$store.getters.loaded[this.modelName]
            }
        },
        methods: {
            // create() {
            //     this.$router.push({ name: ModelRoutesAndNames().names.CREATE })
            // }
        },
        components: {
            // todo why doesnt htis work
            // Table,
            Row,
            ListItem,
        }
    }

    
</script>

<style scoped>

</style>