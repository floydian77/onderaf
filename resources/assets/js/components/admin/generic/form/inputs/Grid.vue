<template>
    <div class="field">
        <template v-if="!hideLabel">
            <label class="label">{{ prop.label }}</label>
        </template> 
        <div class="control">
            <div class="tags big">
                <template v-if="isRelation">
                    <span   v-for="(item, index) in prop.value" 
                            v-bind:key="index" 
                            @click="toggleRelationItem($event, item.id)" 
                            v-bind:class="{ active: isRelationActive(item.id) }"
                            class="tag clickable is-light">
                        {{ item.name }}
                    </span>
                </template>
                <template v-else>
                    <span   v-for="(item, index) in prop.value" 
                            v-bind:key="index" 
                            @click="toggleItem($event, item)" 
                            v-bind:class="{ active: isActive(item) }"
                            class="tag clickable is-light">
                        {{ item }}
                    </span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'prop', 'propKey', 'isRelation', 'hideLabel'],
        created() {
            this.formatProps()
            // console.log('GRID');
            // console.log(this.item);
            // console.log(this.prop);
            // console.log(this.propKey);
            // prop.value, item[propKey]
            // this.formatProps()
        },
        computed: {
            currentValues() {
                // return JSON.parse(this.item[this.propKey])
                return this.item[this.propKey]
            },
            selected: {
                get() {
                    return this.currentValues || this.prop.value[this.prop.default]
                },
                set(val) {
                    // console.log('set');
                    // console.log(val);
                    this.item[this.propKey] = this.prop.value.find(item => item.id == val)
                }
            } 
        },
        methods: {
            formatProps() {
                let val = this.prop.value

                // todo to config..
                if (!this.prop.default) this.prop.default = []

                if (typeof val === 'string') {
                    // remove whitespace, string to array 
                    this.prop.value = val.replace(/ /g,'').split(',')
                }
            },
            toggleItem(event, value) {
                let list = event.target.classList
                if (list.contains('active')) {
                    for (let i = 0; i < this.currentValues.length; i++) {
                        if (this.currentValues[i] == value) {
                            this.currentValues.splice(i, 1)
                            list.remove('active'); 
                        }
                    }
                }
                else {
                    for (let i = 0; i < this.prop.value.length; i++) {
                        if (this.prop.value[i] == value) {
                            // list.remove('active'); 
                            this.currentValues.push(this.prop.value[i])
                            list.add('active');
                        }
                    }
                }
            },
            toggleRelationItem(event, id) {
                // add or remove item, from item[propKey]
                // console.log('EVENT');
                // console.log(event);
                // console.log(id);
                let list = event.target.classList
                if (list.contains('active')) {
                    for (let i = 0; i < this.currentValues.length; i++) {
                        if (this.currentValues[i].id == id) {
                            this.currentValues.splice(i, 1)
                            list.remove('active'); 
                        }
                    }
                } 
                else {
                    // console.log('currentValues');
                    // console.log(this.currentValues);
                    
                    for (let i = 0; i < this.prop.value.length; i++) {
                        if (this.prop.value[i].id == id) {
                            // list.remove('active'); 
                            this.currentValues.push(this.prop.value[i])
                            list.add('active');
                        }
                    }
                } 
            },
            isActive(value) {
                for (let i = 0; i < this.currentValues.length; i++) {
                    if (this.currentValues[i] == value) {
                        return true
                    }
                }
                return false
            },
            isRelationActive(id) {
                for (let i = 0; i < this.currentValues.length; i++) {
                    if (this.currentValues[i].id == id) {
                        return true
                    }
                }
                return false
            }
    }
    }
</script>

<style scoped>

</style>