<template>
    <div>
        <div v-if="loaded">
            <div v-for="(field, index) in formData" :key="index">
                <div v-if="!!getFieldLayout(field.id)">
                    <component  :item="field" 
                                :prop="getFieldLayout(field.id)" 
                                propKey="value" 
                                :is="components.input[getFieldLayout(field.id).type]">
                                </component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Texts, ModelEventNames, Components } from '../../../../../config.js'

    export default {
        props: ['item', 'prop', 'propKey'],
        data() {
            return {
                components: Components,
                formData: []
            }
        },
        created() {
            this.formData = JSON.parse(this.item[this.propKey])
        },
        watch: {
            formData: {
                handler: function () { 
                    this.item[this.propKey] = JSON.stringify(this.formData)
                },
                deep: true
            },
        },
        methods: {
            getFieldLayout(id) {
                return this.layout.find(field => field.id === id)
            },
        },
        computed: {
            layout() {
                let obj = this.$store.getters[ModelEventNames(this.prop.table).FIND](this.item.id)
                return JSON.parse(obj[this.propKey])
            },
            loaded() {
                return this.$store.getters.loaded[this.prop.table]
            },
        }
        
    }
</script>

<style scoped>

</style>