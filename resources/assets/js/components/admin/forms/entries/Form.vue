<template>
    <div v-if="loaded">
        <h1 class="title">{{ layout.name }}</h1>
        <h2 class="subtitle">{{ texts[type].title }}</h2>

        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">
                        Initiatives
                    </label>
                    <div class="control">
                        <!-- <input class="input is-small" type="text" @change="filterInitiatives($event)" placeholder="Filter..">  -->
                        <input class="input is-small" type="text" v-model="initiativeFilter" placeholder="Filter.."> 
                    </div>
                    <!-- todo make this a table, add selected when editing -->
                    <div class="control">
                        <div class="select is-small is-multiple">
                            <!-- <select v-for="(initiative, index) in initiatives" :key="index"> -->
                            <select multiple size="5">
                                <option v-for="(initiative, index) in filteredInitiatives" 
                                        :value="initiative.name" 
                                        @click="setInitiative(initiative.id)" 
                                        :key="index"
                                        :selected="isInitiative(initiative.id)">
                                    <!-- <span v-html="boldFilter(initiative.name)"></span> -->
                                    {{ initiative.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div v-for="(item, index) in layout.data" :key="index">
                    <div class="field">
                        <label class="label">{{ item.label }}</label>
                        <div class="control">
                            <!-- <input class="input is-static" type="email" value="me@example.com" readonly> -->
                            <template v-if="getEntryItem(item.id)">
                                <input class="input is-small" type="text" @change="setEntryItem($event, item.id)" :value="getEntryItem(item.id).value">
                            </template>
                            <template v-else>
                                <input class="input is-small" type="text" @change="newEntryItem($event, item.id)" :placeholder="item.placeholder">
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="type == 'match'">
                <div class="field">
                    <label class="label">
                        Categories
                    </label>
                    <div class="control">
                        <div class="tags">
                            <span v-for="(category, index) in categories" v-bind:key="index" @click="toggleCategory($event, category.id)" class="tag clickable is-light">
                                {{ category.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <hr>
        <div>
            <button class="button is-small" @click="submit">{{ texts[type].buttonLabel }}</button>
            <button class="button is-small" @click="cancel">Cancel</button>
        </div>
    </div>
    <div v-else>
        Loading..
    </div>
</template>

<script>
    // todo add create entry functionality?
    // import Entry from './Entry.vue';
    // todo this looks ugly
    import { Events } from '../../../../event-bus.js'
    import { Notifications } from '../../../../config.js'

    // todo export
    function Entry({ data, formLayout } = {}) {
        this.data = data
        this.formLayout = formLayout
        this.initiativeId = null
    }

    export default {
        props: {
            // Create or edit
            type: String,
            id: String,
            name: String
        },
        data() {
            return {
                // todo export these
                texts: {
                    create: {
                        title: 'Entry aanmaken',
                        buttonLabel: 'Creëer entry',
                    },
                    edit: {
                        title: 'Entry wijzigen',
                        buttonLabel: 'Update entry',
                    },
                    match: {
                        title: 'Entry matchen',
                        buttonLabel: 'Matchen',
                    }
                },
                types: {
                    create: { 
                        // action: 'createEntry',
                        action: 'entryCreate',
                    },
                    edit: { 
                        // action: 'updateEntry',
                        action: 'entryEdit',
                    }
                },
                defaultEntry: {
                    // index, value
                },
                initiativeFilter: '',
                editedEntry: {}
            }
        },
        created() {
            if (this.loaded) {
                // Deep clone
                this.editedEntry = JSON.parse(JSON.stringify(this.entry))
            }
        },
        watch: {
            loaded (loaded) {
                if (loaded) {
                    this.editedEntry = JSON.parse(JSON.stringify(this.entry))
                }
            },
        },
        computed: {
            // todo make a loader component
            loaded() {
                return this.$store.getters.loaded.entries 
                && this.$store.getters.loaded.layouts
                && this.$store.getters.loaded.initiatives
                && this.$store.getters.loaded.categories
            },
            categories() {
                return this.$store.getters.categories 
            },
            activeCategories() {

            },
            hasCategory(id) {

            },
            initiatives() {
                return this.$store.getters.initiatives
            },
            filteredInitiatives() {
                if (this.initiativeFilter == '') return this.initiatives

                return this.initiatives.filter((initiative) => { 
                    return initiative.name.indexOf(this.initiativeFilter) >= 0 
                })
            },
            layout() {
                // return this.$store.getters.getLayout(this.name)
                return this.$store.getters.layoutsFind(this.name)
            },
            entry() {
                // return this.$store.getters.getEntry(this.id) || new Entry({
                return this.$store.getters.entriesFind(this.id) || new Entry({
                    data: [],
                    formLayout: this.layout.name
                })
            },
        },
        methods: {
            boldFilter(name) {
                // todo use this when it's a table
            },
            isInitiative(id) {
                return this.editedEntry.initiativeId === id
            },
            setInitiative(id) {
                this.editedEntry.initiativeId = id
            },
            getItemById(id) {
                return this.editedEntry.data.find((item) => item.id === id)
            },
            getEntryItem(id) {
                return this.getItemById(id)
                // return this.editedEntry.data.find((item) => item.id === id)
            },
            setEntryItem(event, id) {
                let item = this.getItemById(id)
                item.value = event.target.value
            },
            newEntryItem(event, id) {
                this.editedEntry.data.push({
                    id: id,
                    value: event.target.value
                })
            },
            toggleCategory(event, id) {
                let list = event.target.classList
                if (list.contains('active')) list.remove('active');
                else list.add('active');
            },
            submit() {
                // Create or update editedEntry
                // todo move elsewhere
                if (!this.editedEntry.initiativeId) {
                    this.$store.dispatch('setNotification', Notifications['forgot-initiative'])
                }
                else {
                    this.$store.dispatch(this.types[this.type].action, this.editedEntry)
                    this.$router.push({ name: 'form-entries' })
                }
            },
            cancel() {
                this.editedEntry = JSON.parse(JSON.stringify(this.entry))
            }
        },
        components: {
            // Entry
        }
    }
</script>

<style scoped>

</style>