<template>
    <div>
        <div v-if="loaded">
            <Table class="table is-fullwidth">
                <slot name="header">
                    <tr>
                        <th v-for="(prop, key) in properties" v-if="!prop.hideInList" :key="key">
                            {{ prop.label }}
                        </th>
                        <!-- Fill header for button columns -->
                        <th colspan="2"></th>
                    </tr>
                </slot>
                <slot name="body">
                    <Row
                        v-for="item in items"
                        :item="item"
                        :modelName="modelName"
                        :component="component"
                        :key="item.id"
                    >
                    </Row>
                </slot>
            </Table>
            <router-link tag="button" :to="urls.CREATE"> 
                {{ labels.CREATE }}
            </router-link>
        </div>
        <div v-else>
            <!-- Add loading state -->
            ...
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