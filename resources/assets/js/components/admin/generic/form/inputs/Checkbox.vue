<template>
    <div class="field">
        <label class="checkbox">
            <input type="checkbox" v-model="checked">
            {{ prop.label }}
        </label>
    </div>
</template>

<script>
    export default {
        props: ['item', 'prop', 'propKey', 'hideLabel'],
        created() {
        },
        computed: {
            checked: {
                get() {
                    return typeof(this.item[this.propKey]) == 'boolean' ? this.item[this.propKey] : false
                },
                set(val) {
                    this.item[this.propKey] = val
                    console.log(this.item[this.propKey]) 
                }
            }
        }
    }
</script>

<style scoped>

</style>