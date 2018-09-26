<template>
    <div class="field">
        <template v-if="!hideLabel">
            <label class="label">{{ prop.label }}</label>
        </template>
        <div class="control">
            <template v-if="shouldBeTextArea()">
                <textarea class="input is-small" :disabled="!editable()" :placeholder="prop.placeholder" v-model="value" type="text">
                </textarea>
            </template>
            <template v-else>
                <input class="input is-small" :disabled="!editable()" :placeholder="prop.placeholder" v-model="value" type="text">
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'prop', 'propKey', 'hideLabel'],
        created() {
            // console.log('KU');
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
        },
        methods: {
            shouldBeTextArea() {
                return this.item.type == 'text' && this.propKey == 'value'
            },
            // todo extract
            editable() {
                if (this.$route.meta.action == 'EDIT' 
                    && this.prop.editable === false
                    && (!this.item.temp || !this.item.temp.new)) {

                    return false
                }
                return true
            },
        }
    }
</script>

<style scoped>

</style>