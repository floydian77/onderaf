<template>
    <div class="tags">
        <span class="tag active" v-for="(val, index) in value" :key="index">
            {{ val }}
        </span>
    </div>
</template>

<script>
    export default {
        props: ['value'],
    }
</script>

<style scoped>

</style>