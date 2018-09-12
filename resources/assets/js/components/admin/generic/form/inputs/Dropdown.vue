<template>
    <div class="field">
        <template v-if="!hideLabel">
            <label class="label">{{ prop.label }}</label>
        </template> 
        <div class="control">
            <div class="select is-small">
                <select v-model="selected" :disabled="prop.static">
                    <!-- use id if relation -->
                    <!-- todo hacky garbage -->
                    <template v-if="isRelation">
                        <option v-for="(value, index) in prop.value" :value="value.id" :key="index">
                            {{ value.name }}
                        </option>
                    </template>
                    <template v-else>
                        <option v-for="(value, index) in prop.value" :value="value" :key="index">
                            {{ value }}
                        </option>
                    </template>
                </select>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        // props
        // item[propKey] is current value
        // prop.value: available values
        // todo improve naming!
        // 
        props: ['item', 'prop', 'propKey', 'hideLabel', 'isRelation'],
        created() {
            console.log(this.item);
            console.log(this.prop);
            console.log(this.propKey);
            this.formatProps()
        },
        methods: {
            formatProps() {
                let val = this.prop.value

                // todo to config..
                if (!this.prop.default) this.prop.default = 0

                if (typeof val === 'string') {
                    // remove whitespace, string to array 
                    this.prop.value = val.replace(/ /g,'').split(',')
                }
            }
        },
        computed: {
            selected: {
                get() {
                    return this.item[this.propKey] || this.prop.value[this.prop.default]
                },
                set(val) {
                    this.item[this.propKey] = val
                }
            } 
        }
    }
</script>

<style scoped>

</style>