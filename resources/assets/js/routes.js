// import Item from './components/admin/forms/layouts/Item.vue'
// import layoutForm from './components/admin/forms/layouts/Form.vue'
// import layoutList from './components/admin/forms/layouts/List.vue'
// import entryForm from './components/admin/forms/entries/Form.vue'
// import entryList from './components/admin/forms/entries/List.vue'
// import initiativeList from './components/admin/groups/initiatives/List.vue'
// import initiative from './components/admin/groups/initiatives/Initiative.vue'
// import organisationList from './components/admin/groups/organisations/List.vue'
// import organisation from './components/admin/groups/organisations/Organisation.vue'
// import categoryList from './components/admin/properties/categories/List.vue'
// import category from './components/admin/properties/categories/Category.vue'

import Vue from 'vue';
import VueRouter from 'vue-router'

import Admin from './components/admin/Admin.vue'
import urlNotFound from './components/UrlNotFound.vue'
import { Models, ModelRoutes } from './config'


let routes = [] 

// for now, don't use domains in routes
let modelRoutes = ModelRoutes()

for (let i = 0; i < modelRoutes.length; i++) {
  routes.push(modelRoutes[i])
}

routes.push(
  {
    path: '*',
    name:'404', 
    component: urlNotFound
  },
  { name: 'admin', path: '/', component: Admin },
)

Vue.use(VueRouter)

export const Router = new VueRouter({
  routes 
})


// console.log(routes);

// export default routes

// export const Routes = routes


// export default [
//   {
//     path: '*',
//     name:'404', 
//     component: urlNotFound
//   },
//   { name: 'admin', path: '/', component: Admin },
//   // ---------
//   // Form Layouts
//   // ---------
//   // List
//   { name: 'form-layouts', path: '/form-layouts', component: layoutList },
//   // Edit
//   { name: 'form-layouts-edit', path: '/form-layouts/:type/:id', component: layoutForm, props: true },
//   // Create
//   { name: 'form-layouts-create', path: '/form-layouts/:type', component: layoutForm, props: true },
//   // ---------
//   // Form Entries
//   // ---------
//   // List
//   { name: 'form-entries', path: '/form-entries', component: entryList },
//   // Edit
//   { name: 'form-entries-edit', path: '/form-entries/:type/:id', component: entryForm, props: true },
//   // Create
//   { name: 'form-entries-create', path: '/form-entries/:type', component: entryForm, props: true },
//   // ---------
//   // Initiatives
//   // ---------
//   // List
//   { name: 'initiatives', path: '/initiatives', component: initiativeList },
//   // Edit
//   { name: 'initiatives-edit', path: '/initiatives/:type/:id', component: initiative, props: true },
//   // Create
//   { name: 'initiatives-create', path: '/initiatives/:type', component: initiative, props: true },
//   // ---------
//   // Organisations
//   // ---------
//   // List
//   { name: 'organisations', path: '/organisations', component: organisationList },
//   // Edit
//   { name: 'organisations-edit', path: '/organisations/:type/:id', component: organisation, props: true },
//   // Create
//   { name: 'organisations-create', path: '/organisations/:type', component: organisation, props: true },
//   // ---------
//   // Categories
//   // ---------
//   // List
//   { name: 'categories', path: '/categories', component: categoryList },
//   // Edit
//   { name: 'categories-edit', path: '/categories/:type/:id', component: category, props: true },
//   // Create
//   { name: 'categories-create', path: '/categories/:type', component: category, props: true },
// ]
