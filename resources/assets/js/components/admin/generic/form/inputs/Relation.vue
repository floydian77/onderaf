<template>
    <component v-if="loaded"    :item="item" 
                                :prop="relationProp" 
                                :propKey="propKey" 
                                isRelation="true"
                                :is="components.input[prop.relation.type]">
                                </component>
</template>
<script>
    import { Components } from '../../../../../config.js'

    export default {
        props: ['item', 'prop', 'propKey'],
        data() {
            return {
                components: Components
            }
        },
        computed: {
            loaded() {
                return this.$store.getters.loaded[this.prop.relation.table]
            },
            selected: {
                get() {
                    return this.item[this.propKey]
                },
                set(id) {
                    this.item[this.propKey] = id
                }
            },
            relations() {
                // todo validate property exists elsewhere
                let relation = this.prop.relation.table 
                return this.$store.getters[relation]
            },
            relationProp() {
                return { ...this.prop, value: this.relations }
            },
        }
    }
</script>

<style scoped>

</style>