<template>
    <div>
        <div v-if="loaded">
            <table class="table is-fullwidth">
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="(prop, key) in properties" v-if="!prop.hideInList" :key="key">
                            <span>
                                {{ prop.label }}
                            </span>
                        </th>
                        <!-- Fill header for button columns -->
                        <th colspan="3"></th>
                    </tr>
                </thead>
                    <!-- <tr> -->
                    <!-- </tr> -->
                <Row
                    v-for="item in items"
                    :item="item"
                    :modelName="modelName"
                    :component="component"
                    :key="item.id"
                >
                </Row>
            </Table>
            <!-- todo extract if check to config -->
            <button v-if="!isEntry" class="button is-small add is-light">
                <span class="icon is-small">
                    <i class="fas fa-plus"></i>
                </span>
                <span>
                    <router-link :to="urls.CREATE"> 
                        {{ labels.CREATE }}
                    </router-link>
                </span>
            </button>
        </div>
        <div v-else>
            <!-- Add loading state -->
            [Work in progress]
        </div>
    </div>
</template>

<script>
    import ListItem from "./ListItem.vue";
    import Table from "../table/Table.vue";
    import Row from "../table/Row.vue";
    import { Models, ModelLabels, ModelRoutingLabelsAndUrls } from "../../../../config.js"

    export default {

        props: ['modelName'],

        data() {
            return {
                component: ListItem
            }
        }, 
        computed: {
            isEntry() {
                // temp
                return this.modelName == 'entries' || this.modelName == 'layouts'
            },
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
    .button.add {
        margin-top: 40px;
    }

</style>