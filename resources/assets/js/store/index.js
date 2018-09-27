import Vue from 'vue';
import Vuex from 'vuex'
import { Models, Domains, Notifications } from '../config.js'
import { SetState, SetGetters, SetMutations, SetActions, ModelActions, ModelGetters, ModelLoadedState, ModelMutations } from './helpers.js'
// todo use constants for mutation types

Vue.use(Vuex)

// let { Notifications } = Config

// function FormLayout({ name, type, data, placeholder } = {}) {
//     this.name = name;
//     this.type = type;
//     this.data = JSON.parse(data);
//     this.placeholder = placeholder;
// }
// function FormEntry({ id, form_layout, data, initiative_id } = {}) {
//     this.id = id;
//     this.formLayout = form_layout;
//     this.initiativeId = initiative_id;
//     this.data = JSON.parse(data);
// }
// function Initiative({ id, name } = {}) {
//     this.id = id;
//     this.name = name;
// }
// function Category({ id, name } = {}) {
//     this.id = id;
//     this.name = name;
// }
// function Organisation({ id, name } = {}) {
//     this.id = id;
//     this.name = name;
// }

// function addFormLayout(state, layout) {
//     state.forms.layouts.push(new FormLayout(layout))
// }

// function addFormEntry(state, entry) {
//     state.forms.entries.push(new FormEntry(entry))
// }

// function addInitiative(state, initiative) {
//     state.groups.initiatives.push(new Initiative(initiative))
// }

// function addCategory(state, category) {
//     state.properties.categories.push(new Category(category))
// }
// function addOrganisation(state, organisation) {
//     state.groups.organisations.push(new Organisation(organisation))
// }


// set state


// const store2 = new Vuex.Store({
// todo extract to notifications module
const store2 = new Vuex.Store({

    // set state structure
    state: {
        ...SetState(),
        notifications: []
    },

    // add getters
    getters: {
        ...SetGetters(),
        notifications: state => state.notifications,
    },

    // add mutations
    mutations: {
        ...SetMutations(),
        clearNotification(state, index) {
            state.notifications.splice(index, 1)
        },
        setNotification(state, payload) {
            state.notifications.push({ type: payload.type, text: payload.text })
        },
    },

    // add actions
    actions: {
        ...SetActions(),
        fillFrontStore({ dispatch }) {
        },
        fillBackStore({ dispatch }) {
            // todo do this in batches?
            dispatch('layoutsFill')
            dispatch('entriesFill')
            // dispatch('initiativesFill')
            dispatch('categoriesFill')
            dispatch('organisationsFill')
        },
        setNotification({ commit, state }, notification) {
            commit('setNotification', notification)

            // Show top of page
            window.scrollTo( 0, 0 );

            setTimeout(() => {
                commit('clearNotification', 0)
            }, 4000)
        },
    },
})  

// console.log(store2);


// const store = new Vuex.Store({
//     state: {
//         forms: {
//             layouts: [],
//             entries: [] 
//         },
//         properties: {
//             categories: [],
//             conditions: []
//         },
//         groups: {
//             users: [],
//             initiatives: [],
//             organisations: []
//         },
//         loaded: {
//             layouts: false,
//             entries: false,
//             categories: false,
//             conditions: false,
//             users: false,
//             initiatives: false,
//             organisations: false,
//         },
//         notifications: []     
//     },
//     // todo move to form module
//     getters: {
//         loaded: state => state.loaded,
//         layouts: state => state.forms.layouts,
//         entries: state => state.forms.entries,
//         categories: state => state.properties.categories,
//         conditions: state => state.properties.conditions,
//         users: state => state.groups.users,
//         initiatives: state => state.groups.initiatives,
//         organisations: state => state.groups.organisations,
//         notifications: state => state.notifications,
//         getLayout: (state, getters) => (name) => {
//             return getters.layouts.find(layout => layout.name === name)
//         },
//         getEntry: (state, getters) => (id) => {
//             return getters.entries.find(entry => entry.id == id)
//         },
//         getInitiative: (state, getters) => (id) => {
//             return getters.initiatives.find(initiative => initiative.id == id)
//         },
//         getCategory: (state, getters) => (id) => {
//             return getters.categories.find(category => category.id == id)
//         },
//         getOrganisation: (state, getters) => (id) => {
//             return getters.organisations.find(organisation => organisation.id == id)
//         },
//     },
//     mutations: {
//         // extract notification stuff to module
//         clearNotification(state, index) {
//             state.notifications.splice(index, 1)
//         },
//         setNotification(state, payload) {
//             state.notifications.push({ type: payload.type, text: payload.text })
//         },
//         // -----------------------
//         // INITIATIVES
//         // -----------------------
//         // todo code is repeated everywhere
//         getInitiatives (state, payload) {
//             state.groups.initiatives = []
//             for (let initiative of payload) {
//                 addInitiative(state, initiative);
//             }
//             state.loaded.initiatives = true;
//         },
//         createInitiative (state, payload) {
//             addInitiative(state, payload);
//         },
//         updateInitiative (state, payload) {
//             let i = state.groups.initiatives.findIndex(initiative => initiative.id === payload.id);
//             state.groups.initiatives[i] = { ...state.groups.initiatives[i], ...payload };
//         },
//         deleteInitiative (state, payload) {
//             let i = state.groups.initiatives.findIndex(initiative => initiative.id === payload);
//             state.groups.initiatives.splice(i, 1);
//         },
//         // -----------------------
//         // LAYOUTS
//         // -----------------------
//         getLayouts (state, payload) {
//             state.forms.layouts = []
//             for (let layout of payload) {
//                 addFormLayout(state, layout);
//             }
//             state.loaded.layouts = true;
//         },
//         createLayout (state, payload) {
//             addFormLayout(state, payload);
//         },
//         updateLayout (state, payload) {
//             let i = state.forms.layouts.findIndex(layout => layout.name === payload.name);
//             state.forms.layouts[i] = { ...state.forms.layouts[i], ...payload };
//         },
//         deleteLayout (state, payload) {
//             let i = state.forms.layouts.findIndex(layout => layout.name === payload);
//             state.forms.layouts.splice(i, 1);
//         },
//         // -----------------------
//         // ENTRIES
//         // -----------------------
//         getEntries (state, payload) {
//             // todo add verification step here; filter properties, through class?
//             state.forms.entries = []
//             for (let entry of payload) {
//                 addFormEntry(state, entry);
//             }
//             state.loaded.entries = true;
//         },
//         createEntry (state, payload) {
//             addFormEntry(state, payload);
//         },
//         updateEntry (state, payload) {
//             let i = state.forms.entries.findIndex(entry => entry.id === payload.id);
//             // console.log(state);
//             // console.log(payload);
//             state.forms.entries[i] = { ...state.forms.entries[i], ...payload };
//         },
//         deleteEntry (state, payload) {
//             let i = state.forms.entries.findIndex(entry => entry.id === payload);
//             state.forms.entries.splice(i, 1);
//         },
//         // -----------------------
//         // CATEGORIES
//         // -----------------------
//         getCategories (state, payload) {
//             // todo add verification step here; filter properties, through class?
//             state.properties.categories = []
//             for (let category of payload) {
//                 addCategory(state, category);
//             }
//             state.loaded.categories = true;
//         },
//         createCategory (state, payload) {
//             addCategory(state, payload);
//         },
//         updateCategory (state, payload) {
//             let i = state.properties.categories.findIndex(category => category.id === payload.id);
//             state.properties.categories[i] = { ...state.properties.categories[i], ...payload };
//         },
//         deleteCategory (state, payload) {
//             let i = state.properties.categories.findIndex(category => category.id === payload);
//             state.properties.categories.splice(i, 1);
//         },
//         // -----------------------
//         // ORGANISATIONS
//         // -----------------------
//         getOrganisations (state, payload) {
//             // todo add verification step here; filter properties, through class?
//             state.groups.organisations = []
//             for (let organisation of payload) {
//                 addOrganisation(state, organisation);
//             }
//             state.loaded.organisations = true;
//         },
//         createOrganisation (state, payload) {
//             addOrganisation(state, payload);
//         },
//         updateOrganisation (state, payload) {
//             let i = state.groups.organisations.findIndex(organisation => organisation.id === payload.id);
//             state.groups.organisations[i] = { ...state.groups.organisations[i], ...payload };
//         },
//         deleteOrganisation (state, payload) {
//             let i = state.groups.organisations.findIndex(organisation => organisation.id === payload);
//             state.groups.organisations.splice(i, 1);
//         }
//     },  
//     actions: {
//         fillFrontStore({ dispatch }) {
//         },
//         fillBackStore({ dispatch }) {
//             dispatch('getLayouts')
//             dispatch('getEntries')
//             dispatch('getInitiatives')
//             dispatch('getCategories')
//             dispatch('getOrganisations')
//         },
//         setNotification({ commit, state }, notification) {
//             commit('setNotification', notification)

//             // Show top of page
//             window.scrollTo( 0, 0 );

//             setTimeout(() => {
//                 commit('clearNotification', 0)
//             }, 4000)
//         },
//         // todo lots of duplicated code here
//         // -----------------------
//         // CATEGORIES
//         // -----------------------
//         getCategories({ commit, dispatch }) {
//             window.axios.get('api/categories').then(({ data }) => {
//                 commit('getCategories', data)
//             })
//             .catch(function (error) { 
//                 console.log(error); 
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         createCategory({ commit, dispatch }, category) {
//             window.axios.post('/api/categories', category).then((response) => {
//                 // todo add to database here, success and fail flags
                

//                 commit('createCategory', category)
//                 dispatch('setNotification', Notifications['category-added'])

//             })
//             .catch(function (error) { 
//                 dispatch('setNotification', Notifications['failed'])
//                 console.log(error);
//             })
//         },
//         updateCategory({ commit, dispatch }, category) {
//             // todo put this stringify in a verification / validation check?

//             window.axios.put(`api/categories/${category.id}`, category).then((response) => {
//                 // todo add to database here, success and fail flags

//                 commit('updateCategory', category)
//                 dispatch('setNotification', Notifications['category-updated'])
//             })
//             .catch(function (error) { 
//                 console.log(error);
//                 dispatch('setNotification', Notifications['failed'])
//              })
//         },
//         removeCategory({ commit, dispatch }, id) {
//             window.axios.delete(`/api/categories/${id}`).then((response) => {
//                 // todo add to database here, success and fail flags
//                 commit('deleteCategory', id)
//                 dispatch('setNotification', Notifications['category-removed'])
//             })
//             .catch(function (error) { 
//                 console.log(error);
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         // -----------------------
//         // INITIATIVES
//         // -----------------------
//         getInitiatives({ commit, dispatch }) {
//             window.axios.get('api/initiatives').then(({ data }) => {
//                 commit('getInitiatives', data)
//             })
//             .catch(function (error) { 
//                 console.log(error); 
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         createInitiative({ commit, dispatch }, initiative) {
//             window.axios.post('/api/initiatives', initiative).then((response) => {
//                 // todo add to database here, success and fail flags
                

//                 commit('createInitiative', initiative)
//                 dispatch('setNotification', Notifications['initiative-added'])
//             })
//             .catch(function (error) { 
//                 dispatch('setNotification', Notifications['failed'])
//                 console.log(error);
//             })
//         },
//         updateInitiative({ commit, dispatch }, initiative) {
//             // todo put this stringify in a verification / validation check?

//             window.axios.put(`api/initiatives/${initiative.id}`, initiative).then((response) => {
//                 // todo add to database here, success and fail flags

//                 commit('updateInitiative', initiative)
//                 dispatch('setNotification', Notifications['initiative-updated'])
//             })
//             .catch(function (error) { 
//                 console.log(error);
//                 dispatch('setNotification', Notifications['failed'])
//              })
//         },
//         removeInitiative({ commit, dispatch }, id) {
//             window.axios.delete(`/api/initiatives/${id}`).then((response) => {
//                 // todo add to database here, success and fail flags
//                 commit('deleteInitiative', id)
//                 dispatch('setNotification', Notifications['initiative-removed'])
//             })
//             .catch(function (error) { 
//                 console.log(error);
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         // -----------------------
//         // ORGANISATIONS
//         // -----------------------
//         getOrganisations({ commit, dispatch }) {
//             window.axios.get('api/organisations').then(({ data }) => {
//                 commit('getOrganisations', data)
//             })
//             .catch(function (error) { 
//                 console.log(error); 
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         createOrganisation({ commit, dispatch }, organisation) {
//             window.axios.post('/api/organisations', organisation).then((response) => {
//                 // todo add to database here, success and fail flags
                

//                 commit('createOrganisation', organisation)
//                 dispatch('setNotification', Notifications['organisation-added'])
//             })
//             .catch(function (error) { 
//                 dispatch('setNotification', Notifications['failed'])
//                 console.log(error);
//             })
//         },
//         updateOrganisation({ commit, dispatch }, organisation) {
//             // todo put this stringify in a verification / validation check?

//             window.axios.put(`api/organisations/${organisation.id}`, organisation).then((response) => {
//                 // todo add to database here, success and fail flags

//                 commit('updateOrganisation', organisation)
//                 dispatch('setNotification', Notifications['organisation-updated'])
//             })
//             .catch(function (error) { 
//                 console.log(error);
//                 dispatch('setNotification', Notifications['failed'])
//              })
//         },
//         removeOrganisation({ commit, dispatch }, id) {
//             window.axios.delete(`/api/organisations/${id}`).then((response) => {
//                 // todo add to database here, success and fail flags
//                 commit('deleteOrganisation', id)
//                 dispatch('setNotification', Notifications['organisation-removed'])
//             })
//             .catch(function (error) { 
//                 console.log(error);
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         // -----------------------
//         // LAYOUTS
//         // -----------------------
//         getLayouts({ commit, dispatch }) {
//             window.axios.get('api/formLayouts').then(({ data }) => {
//                 commit('getLayouts', data)
//             })
//             .catch(function (error) { 
//                 console.log(error); 
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         createLayout({ commit, dispatch }, layout) {
//             let formatted = { ...layout };
//             formatted.data = JSON.stringify(layout.data);

//             window.axios.post('/api/formLayouts', formatted).then((response) => {
//                 // todo add to database here, success and fail flags
                
//                 commit('createLayout', formatted)
//                 dispatch('setNotification', Notifications['form-layout-added'])
//             })
//             .catch(function (error) { 
//                 dispatch('setNotification', Notifications['failed'])
//                 console.log(error);
//             })
//         },
//         updateLayout({ commit, dispatch }, layout) {
//             // todo put this stringify in a verification / validation check?
//             let formatted = { ...layout };
//             formatted.data = JSON.stringify(layout.data);

//             // todo use oldname here if name is changeable
//             window.axios.put(`api/formLayouts/${layout.name}`, formatted).then((response) => {
//                 // todo add to database here, success and fail flags

//                 commit('updateLayout', layout)
//                 dispatch('setNotification', Notifications['form-layout-updated'])
//             })
//             .catch(function (error) { 
//                 console.log(error);
//                 dispatch('setNotification', Notifications['failed'])
//              })
//         },
//         removeLayout({ commit, dispatch }, name) {
//             window.axios.delete(`/api/formLayouts/${name}`).then((response) => {
//                 // todo add to database here, success and fail flags
//                 commit('deleteLayout', name)
//                 dispatch('setNotification', Notifications['form-layout-removed'])
//             })
//             .catch(function (error) { 
//                 console.log(error);
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         // -----------------------
//         // ENTRIES
//         // -----------------------
//         getEntries({ commit, dispatch }) {
//             window.axios.get('api/formEntries').then((response) => {
//                 // console.log(response.data)
//                 commit('getEntries', response.data)
//             })
//             .catch(function (error) { 
//                 console.log(error); 
//                 dispatch('setNotification', Notifications['failed'])
//             })
//         },
//         createEntry({ commit, dispatch }, entry) {
//             let formatted = { ...entry };
//             formatted.data = JSON.stringify(entry.data);

//             window.axios.post('/api/formEntries', formatted).then((response) => {
//                 // todo add to database here, success and fail flags

//                 // id from server
//                 formatted.id = response.data.id;
//                 // todo sloppy, just use snake case (_)
//                 formatted.form_layout = formatted.formLayout
//                 formatted.initiative_id = formatted.initiativeId

                
//                 commit('createEntry', formatted)
//                 dispatch('setNotification', Notifications['form-entry-added'])
//             })
//             .catch(function (error) { 
//                 dispatch('setNotification', Notifications['failed'])
//                 console.log(error); 
//             })
//         },
//         updateEntry({ commit, dispatch }, entry) {
//             // todo put this stringify in a verification / validation check?
//             let formatted = { ...entry };
//             formatted.data = JSON.stringify(entry.data);
            
//             window.axios.put(`api/formEntries/${entry.id}`, formatted).then((response) => {
//                 // todo add to database here, success and fail flags
//                 commit('updateEntry', entry)
//                 dispatch('setNotification', Notifications['form-entry-updated'])
//                 // console.log(response);
//             })
//             .catch(function (error) { 
//                 dispatch('setNotification', Notifications['failed'])
//                 console.log(error); 
//             })
//         },
//         removeEntry({ commit, dispatch }, id) {
//             window.axios.delete(`/api/formEntries/${id}`).then((response) => {
//                 // todo add to database here, success and fail flags
//                 commit('deleteEntry', id)
//                 dispatch('setNotification', Notifications['form-entry-removed'])
//             })
//             .catch(function (error) { 
//                 dispatch('setNotification', Notifications['failed'])
//                 console.log(error); 
//             })
//         },
//     }
// })



export default store2;
