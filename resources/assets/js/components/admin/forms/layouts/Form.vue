<template>
    <div v-if="loaded">
        <h1 class="title">{{ layout.name }}</h1>
        <h2 class="subtitle">{{ texts[type].title }}</h2>

        <layout :id="layout.id"></layout>
        <hr>
        <div>
            <!-- todo just add this functionality in the child.. -->
            <button @click="submit">{{ texts[type].buttonLabel }}</button>
            <button @click="cancel">Cancel</button>
        </div>
    </div>
    <div v-else>
        Loading..
    </div>
</template>

<script>
    import Layout from './Layout.vue';
    // todo this looks ugly
    import { Events } from '../../../../event-bus.js'

    // todo export
    function Item({ type, label, values, placeholder } = {}) {
        this.type = type || 'input';
        this.label = label || 'Label';
        this.values = values || { subType: 'text' };
        this.placeholder = placeholder || 'Vul hier een waarde in';
    }

    export default {
        props: {
            // Create or edit
            type: String,
            id: String
        },
        data() {
            return {
                // todo export these
                texts: {
                    create: {
                        title: 'Layout aanmaken',
                        buttonLabel: 'Creer layout',
                    },
                    edit: {
                        title: 'Layout wijzigen',
                        buttonLabel: 'Update layout',
                    }
                },
                types: {
                    create: { 
                        // action: 'createLayout',
                        action: 'layoutCreate',
                        // layout: this.defaultLayout 
                    },
                    edit: { 
                        // action: 'updateLayout',
                        action: 'layoutsEdit',
                        // layout: this.$store.getters.getLayout(this.name)
                    }
                },
                defaultLayout: {
                    name: 'naam',
                    type: 'default',
                    data: [new Item({})]
                }
            }
        },
        created() {
            // Create or update layout
            Events.$on('sendFormLayout', (layout) => {
                this.$store.dispatch(this.types[this.type].action, layout)
                this.$router.push({ name: 'form-layouts' })
            })
        },
        destroyed() {
            Events.$off('sendFormLayout')
        },
        computed: {
            // todo make a loader component
            loaded() {
                return this.$store.getters.loaded.layouts
            },
            layout: { 
                // todo maybe use mixins for DRY code, and loading state
                get() {
                    // todo ugly
                    if (this.type == 'create') return this.defaultLayout
                    
                    // return this.$store.getters.getLayout(this.name)
                    return this.$store.getters.layoutsFind(this.id)
                },
                set() {
                    // Do nothing
                }
            },
        },
        methods: {
            submit() {
                Events.$emit('getFormLayout');
            },
            delete() {

            },
            cancel() {

            }
        },
        components: {
            Layout
        }
    }
</script>

<style scoped>

</style>