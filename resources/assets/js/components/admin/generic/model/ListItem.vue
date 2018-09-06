<template>
        <!-- Columns: name, type, amount of entries -->
        <!-- Varying column type views: Text / icon, number, tags, images, status, button, options -->
        <tr>
            <td v-for="(prop, key) in model.properties" v-if="!prop.hideInList" v-bind:key="key">
                {{ item[key] }}
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
        </tr>
</template>

<script>
    import { Models, Texts, ModelRoutingLabelsAndUrls, ModelLabels, ModelEventNames } from "../../../../config.js"

    export default {
        props: ['modelName', 'item'],
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
            remove() {
                this.$store.dispatch(this.actions.REMOVE, this.item.id)
            }
        }
    }
</script>

<style scoped>

</style>