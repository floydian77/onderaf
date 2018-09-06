<template>
    <div class="field">
        <h1>TEST</h1>
        <template v-if="!hideLabel">
            <label class="label">{{ prop.label }}</label>
        </template> 
        <div class="control">
            <div class="select is-small">
                <select v-model="selected" :disabled="prop.static">
                    <option v-for="(value, index) in prop.value" :value="value" :key="index">
                        {{ value }}
                    </option>
                </select>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['item', 'prop', 'propKey', 'hideLabel'],
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