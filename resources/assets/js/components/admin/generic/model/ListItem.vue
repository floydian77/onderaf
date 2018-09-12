<template>
        <!-- Columns: name, type, amount of entries -->
        <!-- Varying column type views: Text / icon, number, tags, images, status, button, options -->
        <tr>
            <td v-for="(prop, key) in model.properties" v-if="!prop.hideInList" v-bind:key="key">
                <component  :is="viewComponent(view(prop, key).type)" 
                            :value="view(prop, key).value"></component>
            </td>
            <td>
                <router-link :to="urls.EDIT(item.id)"> 
                    {{ labels.EDIT }}
                </router-link>
            </td>
            <td>
                <a href="javascript:void(0)" @click="remove">
                    {{ labels.REMOVE }}
                </a>
            </td>
            <td v-if="modelName == 'entries'">
                <router-link :to="urls.CREATE_ENTRY(item.id)"> 
                    {{ labels.CREATE }}
                </router-link>
            </td>

        </tr>
</template>

<script>
    import { Models, Texts, ModelRoutingLabelsAndUrls, ModelLabels, ModelEventNames, Components } from "../../../../config.js"

    export default {
        props: ['modelName', 'item'],
        created() {
        },
        computed: {
                model() {
                    return Models[this.modelName] 
                },
                urls() { 
                    return ModelRoutingLabelsAndUrls(this.modelName, this.model.domain || null).urls 
                },
                labels() { 
                    return ModelLabels(this.modelName) 
                },
                actions() { 
                    return ModelEventNames(this.modelName) 
                }
        },
        methods: {
            view(prop, key) {
                // todo make more readable
                let hasType = prop.listView && prop.listView.type,
                    type = hasType ? prop.listView.type : 'text'

                let hasProperty = prop.listView && prop.listView.property
                let value = this.item[key]

                if (hasProperty) {
                    switch(type) {
                        case 'tags':
                            value = this.item[key].map(x => x[prop.listView.property])
                            break
                        case 'text':
                            if (prop.type == 'relation') {
                                value = this.$store.getters[ModelEventNames(prop.relation.table).FIND](value)[prop.listView.property]
                            } 
                            else {
                                value = this.item[prop.listView.property]
                            }
                            break
                    }
                }

                return {
                    type,
                    value
                }
            },
            viewComponent(type) {
                return Components.view[type]
            },
            remove() {
                this.$store.dispatch(this.actions.REMOVE, this.item.id)
            }
        }
    }
</script>

<style scoped>

</style>