<template>
    <div class="field">
        <template v-if="!hideLabel">
            <label class="label">{{ prop.label }}</label>
        </template> 
        <p>
            {{ prop.value }}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['item', 'prop', 'propKey', 'hideLabel'],
        created() {
        },
        // computed: {
        //     checked: {
        //         get() {
        //             return typeof(this.item[this.propKey]) == 'boolean' ? this.item[this.propKey] : false
        //         },
        //         set(val) {
        //             this.item[this.propKey] = val
        //             console.log(this.item[this.propKey]) 
        //         }
        //     }
        // }
    }
</script>

<style scoped>

</style>