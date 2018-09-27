<template>
    <nav class="breadcrumb is-small" aria-label="breadcrumbs">
        <ul>
            <li
                v-for="(name, index) in crumbs"
                :key="index"
                v-bind:class="{ 'is-active': nonClickableRoute(name) }" 
                v-if="(name != 'domain') || (name == 'domain' && hasDomain)"
            >
                <router-link :to="{ name: name, props: { modelName: modelName } }">{{ label(name) }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { Breadcrumbs, Models, Domains, ModelRouteNamesToLabels } from '../../../config.js'

    export default {
        computed: {
            crumbs() {
                return Breadcrumbs[this.$route.name]
            },
            modelName() {
                return this.$route.params.modelName
            },
            hasDomain() {
                return !!Models[this.modelName].domain
            },
        },
        created() {
            // console.log(this.$route);
        },
        methods: {
            label(name) {
                // console.log(name);
                
                let label = ModelRouteNamesToLabels(this.modelName)[name]

                return label || name
            },
            nonClickableRoute(name) {
                return !this.routeNameExists(name) || this.isCurrentRoute(name)
            },
            isCurrentRoute(name) {
                return name === this.$route.name
            },
            routeNameExists(name) {
                let names = []
                for (let route of this.$router.options.routes) {
                    if (route.name) names.push(route.name)
                }
                if (names.includes(name)) {
                    return true;
                }
                return false
            }
        }

    }
</script>

<style scoped>
    .breadcrumb {
        background-color: #c3c3c31c;
        padding: 6px 15px;
        margin-bottom: 40px;
        /* padding-top: 8px; */
    }

    .no-route {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 0 0.75em;
        pointer-events: none;
        text-decoration: none;
        cursor: default;
    }

    ul li {
        font-weight: 600;
        font-size: .75rem;
    }

</style>