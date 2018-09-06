<template>
    <div v-if="loaded">
        <!-- Properties afgaan
        Wijzigbaar afhankelijk van type
        Textfield, select, checkbox

        Relaties, altijd select field

        Wijzigingen / toevoegingen opslaan

        Annuleren -->

        <div v-for="(prop, key) in model.properties" v-bind:key="key">
            <component :is="inputComponent(prop.type)" :item="editedItem" :prop="prop" :propKey="key"></component>
        </div>
        <button @click="submit">{{ submitLabel }}</button>
    </div>
</template>

<script>
    import { Models, Texts, ModelLabels, NewModelItem, ModelEventNames, Components, Actions } from "../../../../config.js"
    import TextField from "../form/inputs/Text.vue"

    export default {
        props: ['id', 'modelName'],
        created() {
        },
        computed: {
            loaded() {
                return this.$store.getters.loaded[this.modelName]
            },
            model() {
                return Models[this.modelName]
            },
            item() {
                switch(this.action) {
                    case Actions.CREATE:
                        return NewModelItem(this.modelName)
                        break
                    case Actions.EDIT:
                        return this.$store.getters[ModelEventNames(this.modelName).FIND](this.id)
                        break
                }
            },
            action() {
                return this.$route.meta.action
            },
            submitLabel() { 
                return ModelLabels(this.modelName)[this.action]
            },
            editedItem() {
                // deep clone
                return JSON.parse(JSON.stringify(this.item))
            }
        },
        methods: {
            inputComponent(type) {
                return Components.input[type]
            },
            submit() {
                this.$store.dispatch(ModelEventNames(this.modelName)[this.action], this.editedItem)
            }
        },
        components: {
            TextField
        }
    }
</script>

<style scoped>

</style>