<template>
<div>
    <div v-for="(notification, index) in notifications" v-bind:key="index" class="notification" v-bind:class="notification.type">
        <button class="delete" @click="remove(index)"></button>
        {{ notification.text }}
    </div>
</div>
</template>

<script>
    export default {
        computed: {
            notifications() { return this.$store.getters.notifications },    
            isEmpty() {
                return !this.type || !this.text
            }
        },
        methods: {
            remove(index) {
                this.$store.commit('clearNotification', index)
            }
        }
    }
</script>

<style scoped>



.notification.is-success {
    background-color: #23d160cc;
}

.notification {
    margin-bottom: 30px;
    padding: 0.5rem;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 0;
}

.notification .delete {
    height: 14px;
    min-height: 14px;
    max-height: 14px;
    width: 14px;
    min-width: 14px;
    max-width: 14px;
}

</style>