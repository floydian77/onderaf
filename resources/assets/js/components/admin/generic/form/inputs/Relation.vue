<template>
    <div class="field">
        <label class="label">{{ prop.label }}</label>
        <div class="control">
            <div class="select is-small">
                <select v-model="selected" :disabled="prop.static">
                    <option v-for="(obj, index) in relations" :value="obj.id" :key="index">
                        {{ obj.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['item', 'prop', 'propKey'],
        computed: {
            selected: {
                get() {
                    return this.item[this.propKey]
                },
                set(id) {
                    this.item[this.propKey] = id
                }
            },
            relations() {
                // todo validate property exists elsewhere
                let relation = this.prop.relation.table 
                return this.$store.getters[relation]
            }

        }
    }
</script>

<style scoped>

</style>