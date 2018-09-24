<template>
    <div>
        <template v-if="prop.columns">
            <Table class="table is-fullwidth">
                <slot name="header">
                    <thead>
                        <tr>
                            <th v-for="(col, key) in prop.columns" :key="key">
                                {{ col.label }}
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                </slot>
                <slot name="body">
                    <template v-if="item[propKey]">
                        <tr v-for="(value, index) in values" v-if="!value.inactive" :key="index">
                            <td v-for="(col, key) in prop.columns" :key="key">
                                <component  :item="value" 
                                            :prop="col" 
                                            :propKey="key" 
                                            :is="components.input[col.type]" 
                                            :hideLabel="true">
                                            </component>
                            </td>
                            <template v-if="sortable">
                                <td>
                                    <button @click="indexUp(index)">Up</button>
                                    <button @click="indexDown(index)">Down</button>
                                    <button @click="removeRow(index)">Remove field</button>
                                </td>
                            </template>
                        </tr>

                    </template>
                </slot>
            </table>
            <button @click="addRow()">{{ texts.table.ROW + ' ' + texts.actions.CREATE }}</button>
        </template>
    </div>
</template>

<script>
    // import Table from '../../table/Table.vue'
    import { Components, Texts } from '../../../../../config.js'

    export default {
        props: ['item', 'prop', 'propKey'],
        data() { 
            return {
                components: Components,
                texts: Texts,
                // use data intead of computed for deep watcher
                values: [],
                sortable: this.prop.sortable || false
            }
        },
        watch: {
            values: {
                handler: function () { 
                    this.setValues()
                },
                deep: true
            },
        },
        created() {
            this.values = this.getValues()
        },
        methods: {
            getValues() {
                let values = this.item[this.propKey] || this.item.default || ''
                return JSON.parse(values)
            },
            setValues() {
                // todo should probably use vuex
                // todo extract to class
                // let row = { id, type, label, value } = this.values
                this.item[this.propKey] = JSON.stringify(this.values)
            },
            // todo to computed
            ids() {
                let ids = []

                for (let row of this.values) {
                    if (row.id) ids.push(row.id)
                }

                return ids
            },
            indexUp(index) {
                let item = this.values[index]

                this.values.splice(index, 1)
                this.values.splice(Math.max(0, index - 1), 0, item)
            },
            indexDown(index) {
                let item = this.values[index]
                let length = this.values.length
                
                this.values.splice(index, 1)
                this.values.splice(Math.min(length - 1, index + 1), 0, item)
            },
            addRow() {
                // todo better solution?
                // .. new row
                let obj = {
                    id: Math.max(...this.ids()) + 1,
                    // todo get these from config, obviously
                    type: 'textfield',
                    label: '',
                    value: '',
                    temp: {
                        new: true
                    }
                }
                
                // for (let key in this.prop.columns) {
                //     let col = this.prop.columns[key]
                // }
                this.values.push(obj)
            },
            removeRow(index) {
                let item = this.values[index]
                    item.inactive = true

                // change array to trigger watcher
                // push to back of list
                this.values.splice(index, 1)
                this.values.splice(index, 0, item)
            },
        },
        computed: {
        }
    }
</script>

<style scoped>

</style>