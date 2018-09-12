<template>
    <div class="menu">
        <template v-for="(models, domain) in domainModelUrlNames">
            <p :key="'p' + domain" class="menu-label">{{ domain }}</p>
            <ul :key="'u' + domain" class="menu-list">
                <li v-for="(url, model) in models" :key="model">
                    <router-link :to="{ name: url, params: { modelName: model } }">{{ model }}</router-link>
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
    import { DomainModelUrlNames } from "../../../config.js";

    export default {
        created() {
            // console.log(this.$route.name);
        },

        data() {
            return {
                // todo export this
                domainModelUrlNames: DomainModelUrlNames(),
            }
        },
        
    }
</script>

<style scoped>

</style>