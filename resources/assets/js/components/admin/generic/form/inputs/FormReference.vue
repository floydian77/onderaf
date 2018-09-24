<template>
    <div>
        <div v-if="loaded">
            <!-- <div v-for="(field, index) in formData" :key="index">
                <div v-if="!!getFieldLayout(field.id)">
                    <component  :item="field" 
                                :prop="getFieldLayout(field.id)" 
                                propKey="value" 
                                :is="components.input[getFieldLayout(field.id).type]">
                                </component>
                </div>
            </div> -->
            <div v-for="(field, index) in layout" :key="index" v-if="!field.inactive">
                <component  :item="getFieldData(field)" 
                            :prop="formatField(field)" 
                            propKey="value" 
                            :is="components.input[field.type]">
                            </component>
            </div>
        </div>
    </div>
</template>

<script>
    import { Texts, ModelEventNames, Components, TypeDefaults } from '../../../../../config.js'

    export default {
        props: ['item', 'prop', 'propKey'],
        data() {
            return {
                components: Components,
                formData: [],
                layoutId: this.$route.params.id 
            }
        },
        created() {
            // console.log('item')
            // console.log(this.layout)
            this.formData = this.item[this.propKey].length
                            ? JSON.parse(this.item[this.propKey])
                            : this.item[this.propKey];
            // console.log(this.formData)
            
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
            getFieldData(field) {
                if (this.formData.length) {
                    let data = this.formData.find(item => item.id === field.id)
                    if (data) {
                        return data
                    }
                }
                this.formData.push({ id: field.id, value: TypeDefaults[field.type] })
                return { id: field.id, value: TypeDefaults[field.type] }
            },
            formatField(field) {
                if (!field.placeholder) field.placeholder = field.value

                return field
            },
            getFieldLayout(id) {
                return this.layout.find(field => field.id === id)

            },
        },
        computed: {
            layout() {
                let obj = this.$store.getters[ModelEventNames(this.prop.table).FIND](this.item.layout)
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