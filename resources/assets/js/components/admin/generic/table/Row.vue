<template>
        <component :modelName="modelName" :item="item" :is="component"></component>
</template>

<script>
    export default {
        props: ['modelName', 'item', 'component']
    }
</script>

<style scoped>

</style>