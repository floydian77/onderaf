<template>
  <div>
    <!-- <layout-list></layout-list>
    <hr>
    <entry-list></entry-list>
    <hr> -->
    
    <breadcrumb></breadcrumb>
    <notification></notification>
    <router-view></router-view>
  </div>
</template>

<script>
    // todo works? change to list?
    import LayoutList from './forms/layouts/List.vue';
    import EntryList from './forms/entries/List.vue';
    import Breadcrumb from './generic/Breadcrumb.vue';
    import Notification from './generic/Notification.vue';

    export default {
        components: {
            LayoutList,
            EntryList,
            Breadcrumb,
            Notification
        },
        methods: {
        },
        created() {
            this.$store.dispatch('fillBackStore')
        },
    }
</script>

<style>

</style>


