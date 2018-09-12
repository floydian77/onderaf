<template>
    <div v-if="loaded">
        <div class="columns">
            <!-- <div class="field column">
                <label class="label is-small">Naam:</label>
                <div class="control">
                    <input class="input is-small" v-model="editedLayout.name" type="text" readonly>
                </div>
            </div> -->
            <div class="field column">
                <label class="label is-small">Type:</label>
                <div class="control">
                    <input class="input is-small" v-model="editedLayout.type" type="text" readonly>
                </div>
            </div>
        </div>
        <hr>
        <div v-for="(item, index) in editedLayout.data" :key="index">
            <div class="columns input-row">
                <!-- Edit label -->
                <div class="column field">
                    <label class="label is-small">Label</label>
                    <div class="control">
                        <input class="input is-small" v-model="item.label" type="text">
                    </div>
                </div>
                <div class="column field">
                    <label class="label is-small">Placeholder</label>
                    <div class="control">
                        <input class="input is-small" v-model="item.placeholder" type="text">
                    </div>
                </div>
                <div class="column field">
                    <label class="label is-small">Type</label>
                    <div class="control">
                        <input class="input is-small" v-model="item.type" type="text" readonly>
                    </div>
                </div>
                <div class="column field">
                    <label class="label is-small">Subtype</label>
                    <div class="control">
                        <input class="input is-small" v-model="item.values.subType" type="text" readonly>
                    </div>
                </div>
                <div class="column field">
                    <label class="label is-small">Index</label>
                    <div class="control">
                        <input class="input is-small" :value="itemIndex(item, index)" type="text" readonly>
                    </div>
                </div>
                <div class="column">
                    <button @click="indexUp(index)">Up</button>
                    <button @click="indexDown(index)">Down</button>
                    <button @click="removeField(index)">Remove field</button>
                </div>
            </div>
            <div class="columns">
                <!-- Edit label -->
            </div>

        </div>
            <!-- todo For now text inputs only -->
        <button @click="addField()">Add field</button>
    </div>
</template>

<script>
    import { Events } from '../../../../event-bus.js'


    // todo extract these
    function Item({ id, type, label, values, placeholder } = {}) {
        this.id = id
        this.type = type || 'input';
        this.label = label || 'Label';
        this.values = values || { subType: 'text' };
        this.placeholder = placeholder || 'Vul hier een waarde in';
    }

    export default {
        props: {
            id: Number
        },
        data() {
            return {
                editedLayout: {}
            }
        },
        created() {
            if (this.loaded) {
                // Deep clone
                this.editedLayout = JSON.parse(JSON.stringify(this.layout))
                this.editedLayout.data = JSON.parse(this.editedLayout.data)
                // console.log(JSON.parse(this.editedLayout.data))
            }
            Events.$on('getFormLayout', () => {
                this.sendLayout()
            });
        },
        watch: {
            loaded (loaded) {
                if (loaded) {
                    // console.log('TEST2')
                    this.editedLayout = JSON.parse(JSON.stringify(this.layout))
                }
            },
        },
        destroyed() {
            Events.$off('getFormLayout')
        },
        computed: {
            loaded() {
                return this.$store.getters.loaded.layouts
            },
            layout() { 
                // return this.$store.getters.getLayout(this.name) 
                // console.log('finding..');
                // console.log(this.$store.getters.layoutsFind(this.id));
                // console.log('--');
                
                return this.$store.getters.layoutsFind(this.id) 
            },
        },
        methods: {
            // todo Add validation and verification here
            ids() {
                let ids = []

                for (let item of this.editedLayout.data) {
                    if (item.id) ids.push(item.id)
                }

                return ids
            },
            itemIndex(item, index) {
                item.index = index;
                return index
            },
            indexUp(index) {
                let item = this.editedLayout.data[index]

                this.editedLayout.data.splice(index, 1)
                this.editedLayout.data.splice(Math.max(0, index - 1), 0, item)
            },
            indexDown(index) {
                let item = this.editedLayout.data[index]
                let length = this.editedLayout.data.length
                
                this.editedLayout.data.splice(index, 1)
                this.editedLayout.data.splice(Math.min(length - 1, index + 1), 0, item)
            },
            sendLayout() {
                // this.editedLayout.oldName = this.layout.name
                Events.$emit('sendFormLayout', this.editedLayout);
            },
            subType(item) {
                return item.values && item.values.subType ? item.values.subType : 'textfield' 
            },
            addField() {
                // todo better solution?
                this.editedLayout.data.push(new Item({ id: Math.max(...this.ids()) + 1 }))
            },
            removeField(index) {
                this.editedLayout.data.splice(index, 1)
            },
            sendFormData() {

            }
        }
    }
</script>

<style scoped>

</style>