<template>
    <div class="field">
        <template v-if="!hideLabel">
            <label class="label">{{ prop.label }}</label>
        </template> 
        <div class="control">
            <div class="select is-small">
                <select v-model="selected" :disabled="prop.static || !editable()">
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
            // console.log(this.item);
            // console.log(this.prop);
            // console.log(this.propKey);
            this.formatProps()

            if (!this.item[this.propKey]) {
                this.item[this.propKey] = this.prop.value[this.prop.default || 0]
            }
        },
        methods: {
            // todo extract
            editable() {
                if (this.$route.meta.action == 'EDIT' 
                    && this.prop.editable === false
                    && (!this.item.temp || !this.item.temp.new)) {

                    return false
                }
                return true
            },
            formatProps() {
                let val = this.prop.value

                // todo to config..
                // if (!this.prop.default) this.prop.default = 0
                // let val = this.prop.value || this.prop.default || 0

                if (typeof val === 'string') {
                    // remove whitespace, string to array 
                    this.prop.value = val.replace(/ /g,'').split(',')
                }

                // this.item[this.propKey] = val
            }
        },
        computed: {
            selected: {
                get() {
                    return this.item[this.propKey]
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