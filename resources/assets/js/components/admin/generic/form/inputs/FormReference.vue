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
            <div v-for="(field, index) in layout" :key="index">
                <component  :item="getFieldData(field.id)" 
                            :prop="formatField(field)" 
                            propKey="value" 
                            :is="components.input[field.type]">
                            </component>
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
                formData: [],
                layoutId: this.$route.params.id 
            }
        },
        created() {
            this.formData = this.item[this.propKey].length
                            ? JSON.parse(this.item[this.propKey])
                            : this.item[this.propKey];
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
            getFieldData(id) {
                if (this.formData.length) {
                    let data = this.formData.find(field => field.id === id)
                    if (data) {
                        return data
                    }
                }
                this.formData.push({ id, value: '' })
                return { id, value: '' }
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
                let obj = this.$store.getters[ModelEventNames(this.prop.table).FIND](this.layoutId)
                // console.log(JSON.parse(obj[this.propKey]));
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