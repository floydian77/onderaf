<template>
    <div class="field">
        <template v-if="!hideLabel">
            <label class="label">{{ prop.label }}</label>
        </template>
        <div class="control">
            <input class="input is-small" :placeholder="prop.placeholder" v-model="value" type="text">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'prop', 'propKey', 'hideLabel'],
        created() {
            // console.log('text');
            // console.log(this.item);
            // console.log(this.propKey);
        },
        computed: {
            value: {
                get() {
                    return this.item[this.propKey] ||  ''
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