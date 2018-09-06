    import Vue from 'Vue'
    import store from './store/index';

    export const StorePlugin = {
        install(Vue, options) {
            Vue.prototype.$store = store
        }
    }

    Vue.use(StorePlugin);
