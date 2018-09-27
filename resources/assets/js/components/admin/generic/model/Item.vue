<template>
    <div v-if="loaded">
        <!-- Properties afgaan
        Wijzigbaar afhankelijk van type
        Textfield, select, checkbox

        Relaties, altijd select field

        Wijzigingen / toevoegingen opslaan

        Annuleren -->

        <div v-for="(prop, key) in model.properties" v-bind:key="key">
            <component :is="inputComponent(prop.type)" :item="editedItem" :prop="prop" :propKey="key" 
                       v-if="subdomain == 'admin' || !prop.adminOnly">
            </component>
        </div>
        <button class="button is-small is-info" @click="submit">{{ submitLabel }}</button>
    </div>
</template>

<script>
    import { Models, Texts, ModelLabels, NewModelItem, ModelEventNames, Components, Actions } from "../../../../config.js"
    import { RemoveKeys } from "../../../../store/helpers.js"
    import TextField from "../form/inputs/Text.vue"

    export default {
        props: ['id', 'modelName'],
        data() {
            return {
                subdomain: ''
            } 
        },
        created() {
            // console.log('blabla');
            // console.log(this.id);
            // console.log(this.modelName);
            
            this.subdomain = location.hostname.split('.').shift();
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
                return this.cloneObj(this.item)
            }
        },
        methods: {
            // todo extrct
            cloneObj(o) {
                return JSON.parse(JSON.stringify(o))
            },
            inputComponent(type) {
                return Components.input[type]
            },
            cleanItem(item) {
                // todo extract
                let keys = [
                    'temp'
                ]
                // return JSON.stringify(RemoveKeys(JSON.parse(this.editedItem), keys))
                // this.item = this.editedItem
                RemoveKeys(item, keys)
            },
            submit() {
                // this.cleanItem()
                // todo is all this cloning good practise?
                let item = this.cloneObj(this.editedItem)
                this.cleanItem(item)

                this.$store.dispatch(ModelEventNames(this.modelName)[this.action], item)
            }
        },
        components: {
            TextField
        }
    }
</script>

<style scoped>
    button.is-info {
        margin-top: 20px
    }

</style>