// config strings, mutations, urls, current language 


// Todo add labels to url names
// Breadcrumbs based on current url and parent urls

// todo complete this later

// models should generate most functionality
// define model, properties, value types and constraints..


// let statics =  {
//     FORM_LAYOUTS: 'form-layouts',
//     FORM_ENTRIES: 'form-entries',
//     CATEGORIES: 'categories',
//     CONDITIONS: 'conditions',
//     INITIATIVES: 'initiatives',
//     ORGANISATIONS: 'organisations',
// }

import modelList from './components/admin/generic/model/List.vue'
import modelItem from './components/admin/generic/model/Item.vue'
import TextField from './components/admin/generic/form/inputs/Text.vue'
import Dropdown from './components/admin/generic/form/inputs/Dropdown.vue'
import Checkbox from './components/admin/generic/form/inputs/Checkbox.vue'
import Relation from './components/admin/generic/form/inputs/Relation.vue'
import Table from './components/admin/generic/form/inputs/Table.vue'
import Grid from './components/admin/generic/form/inputs/Grid.vue'
import FormReference from './components/admin/generic/form/inputs/FormReference.vue'
import Tags from './components/admin/generic/view/Tags.vue'
import TextView from './components/admin/generic/view/Text.vue'
import FormText from './components/admin/generic/form/views/Text.vue'


// console.log(statics.TEST);

export const Domains = {
    'forms': {
        label: 'Formulieren'
    },
    'properties': {
        label: 'Eigenschappen'
    },
    'groups': {
        label: 'Groepen'
    }
}

export const Models = {
    'categories': {
        domain: 'properties',
        label: {
            singular: 'Categorie',
            plural: 'Categorieen'
        },
        // todo do validation stuff later
        properties: {
            'name': {
                label: 'Naam',
                type: 'textfield',
                placeholder: 'Vul hier een naam in',
                validation: {},
            },
        } 
    },
    'initiatives': {
        domain: 'groups',
        label: {
            singular: 'Initiatief',
            plural: 'Initiatieven'
        },
        properties: {
            'name': {
                label: 'Naam',
                type: 'textfield',
                placeholder: 'Vul hier een naam in',
                validation: {},
            },
        } 
    },
    'organisations': {
        domain: 'groups',
        label: {
            singular: 'Organisatie',
            plural: 'Organisaties'
        },
        properties: {
            'name': {
                label: 'Naam',
                type: 'textfield',
                placeholder: 'Vul hier een naam in',
                validation: {},
            },
        } 
    },
    'users': {
        domain: 'groups',
        label: {
            singular: 'Gebruiker',
            plural: 'Gebruikers'
        },
        properties: {
            'name': {
                label: 'Naam',
                type: 'textfield',
                placeholder: 'Vul hier een naam in',
                validation: {},
            },
        } 
    },
    'layouts': {
        domain: 'forms',
        label: {
            singular: 'Layout',
            plural: 'Layouts'
        },
        properties: {
            'name': {
                label: 'Naam',
                type: 'textfield',
                placeholder: 'Vul hier een naam in',
                validation: {},
            },
            'type': {
                label: 'Type',
                type: 'select',
                value: ['default'], 
                default: 0,
                validation: {},
            },
            'data': {
                label: 'Layout',
                type: 'table',
                columns: {
                    'label': {
                        label: 'Label',
                        type: 'textfield',
                        placeholder: 'Input / text label',
                        validation: {},
                    },
                    'value': {
                        label: 'Waardes / placeholder',
                        type: 'textfield',
                        placeholder: 'Dropdown: waardes, tekst: placeholder',
                        validation: {},
                    },
                    'type': {
                        label: 'Type',
                        type: 'select',
                        value: ['text', 'rich-text', 'textfield', 'select', 'multiselect', 'checkbox'], 
                        default: 0,
                        validation: {},
                        editable: false
                    },

                },
                hideInList: true,
                sortable: true,
                validation: {},
            },
        } 
    },
    'entries': {
        domain: 'forms',
        label: {
            singular: 'Inzending',
            plural: 'Inzendingen'
        },
        properties: {
            'status': {
                label: 'Status',
                adminOnly: true,
                type: 'select',
                value: ['pending', 'accepted'],
                default: 0
            },
            'data': {
                // input data; reference to form layout
                label: 'Data',
                // todo change formReference to dataEntry, modelEntry, or entry, or w/e
                type: 'formReference',
                table: 'layouts',
                property: 'data',
                hideInList: true
            },
            'layout': {
                label: 'Layout',
                listView: {
                    property: 'name'
                },
                // Foreign key
                relation: {
                    table: 'layouts',
                    field: 'id',
                    grouping: 'many_to_one',
                    type: 'select'
                },
                type: 'relation',
                // todo; 'static' is confusing here
                static: true,
                validation: {},
            },
            // 'initiative': {
            //     label: 'Initiatief',
            //     // Foreign key
            //     relation: {
            //         table: 'initiatives',
            //         field: 'id',
            //         grouping: 'many_to_one',
            //         type: 'select'
            //     },
            //     type: 'relation',
            //     validation: {},
            // },
            'categories': {
                label: 'Categorieen',
                // hideInList: true,
                listView: {
                    type: 'tags',
                    property: 'name'
                },
                // Foreign key
                relation: {
                    table: 'categories',
                    field: 'id',
                    grouping: 'many_to_many',
                    type: 'multiselect'
                },
                type: 'relation',
                validation: {},
            },
        } 
    }
}
// export const Columns = {
//     input: ['label', 'type', 'values', 'placeholder']
// }
// todo validation column


export const Statics = {
    SET_NOTIFICATION: 'setNotification'
}
export const Urls = {
    API: 'api'
}

export const Texts = {
    actions: {
        FILLED: 'geladen',
        FIND: 'zoeken..',
        FOUND: 'gevonden',
        EDIT: 'wijzigen',
        EDITED: 'gewijzigd',
        CREATE: 'toevoegen',
        CREATED: 'toegevoegd',
        REMOVE: 'verwijderen',
        REMOVED: 'verwijderd',
    },
    table: {
        ROW: 'Rij',
        COLUMN: 'Column',
    }
}


// export const Texts = texts

// 'name': {
//     label: 'Naam',
//     type: 'text',
//     placeholder: 'Vul hier een naam in',
//     validation: {},
// },

export const TypeDefaults = {
    textfield: '',
    checkbox: false,
    multiselect: [],
    relation: 1 
}

export function NewModelItem(model) {
    let properties = Models[model].properties
    let item = {}
    for (let propKey in properties) {
        let prop = properties[propKey]
        
        // console.log('type');
        // console.log(prop.type);
        // console.log('lafje');
        // console.log(prop);
        // check property type, string > '', etc
        if (prop.type == 'textfield') {
            item[propKey] = ''
        }
        // select
        if (prop.type == 'select') {
            item[propKey] = prop.value[prop.default]
        }
        if (prop.type == 'multiselect') {
            item[propKey] = []
        }
        // formReference
        if (prop.type == 'formReference') {
            item.id = 1
            item[propKey] = []
        }
        // relation
        if (prop.type == 'relation') {
            // first relation is default
            switch (prop.relation.type) {
                case 'multiselect':
                    item[propKey] = []
                    break
                case 'select':
                    item[propKey] = 1
                    break
                default:
                    item[propKey] = 1
            }
        }
    }
    
    return item
}

// must be camelcase since they act as function names
export function ModelEventNames(model) {
    return { 
        FILL: model + 'Fill',
        FILLED: model + 'Filled',
        FIND: model + 'Find',
        FOUND: model + 'Found',
        CREATE: model + 'Create',
        CREATED: model + 'Created',
        EDIT: model + 'Edit',
        EDITED: model + 'Edited',
        REMOVE: model + 'Remove',
        REMOVED: model + 'Removed' 
    }
}

// export const ModelUrlNamesToLabels = (model) => {
//     let modelLabels = ModelLabels(model)
//     let urlNames = ModelRoutesAndNames().names

//     let labels = {
//         [urlNames.LIST]: modelLabels.LIST,
//         [urlNames.CREATE]: modelLabels.CREATE,
//         [urlNames.EDIT]: modelLabels.EDIT,
//     }

//     return labels
// }

export const ModelLabels = (model) => {

    let domain = Models[model].domain
    let modelLabel = Models[model].label
    let actionLabels = Texts.actions

    return {
        // todo do verification elsewhere
        DOMAIN: domain && Domains[domain] ? Domains[domain].label : null,
        LIST: modelLabel.plural,
        FILLED: modelLabel.plural + ' ' + actionLabels.FILLED,
        FIND: modelLabel.singular + ' ' + actionLabels.FIND,
        FOUND: modelLabel.singular + ' ' + actionLabels.FOUND,
        CREATE: modelLabel.singular + ' ' + actionLabels.CREATE,
        CREATED: modelLabel.singular + ' ' + actionLabels.CREATED,
        EDIT: modelLabel.singular + ' ' + actionLabels.EDIT,
        EDITED: modelLabel.singular + ' ' + actionLabels.EDITED,
        REMOVE: modelLabel.singular + ' ' + actionLabels.REMOVE,
        REMOVED: modelLabel.singular + ' ' + actionLabels.REMOVED,
    }
}

export const ModelDomainString = (model, domain) => {
    return domain ? domain + '-' + model
                  : model
}

export const ModelRoutesAndNames = () => {
    return { 
        routes: {
            LIST:   '/:modelName',
            // todo 'create' should be merged with 'create_entry'
            CREATE: '/:modelName/:action',
            // todo the app shouldn't support non-admin functions
            CREATE_ENTRY: '/:modelName/:action/layout/:id',
            EDIT:   '/:modelName/:action/:id',
        }, 
        names: {
            DOMAIN: 'domain',
            LIST:   'model-list',
            CREATE: 'model-create',
            CREATE_ENTRY: 'model-create-entry',
            EDIT:   'model-edit',
        },
    }
}

export const ModelRouteNamesToLabels = (model) => {
    let names = ModelRoutesAndNames().names
    let labels = ModelRoutingLabelsAndUrls(model).labels

    return {
        [names.DOMAIN]: labels.DOMAIN,
        [names.LIST]: labels.LIST, 
        [names.CREATE]: labels.CREATE, 
        [names.CREATE_ENTRY]: labels.CREATE, 
        [names.EDIT]: labels.EDIT 
    }
}



export const ModelRoutingLabelsAndUrls = (model, domain) => {
    // let string = ModelDomainString(model, domain),
    let labels = ModelLabels(model)

    return { 
        labels: {
            DOMAIN: labels.DOMAIN,
            LIST:   labels.LIST,
            CREATE: labels.CREATE,
            EDIT:   labels.EDIT
        },
        urls: {
            LIST:   '/' + model,
            CREATE: '/' + model + '/create',
            CREATE_ENTRY: (layoutId) => { return '/' + model + '/create/layout/' + layoutId },
            // urls with extra params are functions, todo maybe do differently?
            EDIT: (id) => { return '/' + model + '/edit/' + id },
        }
    }
}


export const MergeModelObjects = (action) => {
    let object = {}

    // model actions
    for (let key in Models) {
        let model = Models[key]
        object = { ...object, ...action(key, model.domain || null) }
    }

    return object;
}

// todo should be a better way
export const Components = {
    model: {
        list: modelList,
        item: modelItem
    },
    // todo possibly add specifics inputs here that share same componen
    input: {
        textfield: TextField,
        text: FormText,
        select: Dropdown,
        multiselect: Grid, 
        checkbox: Checkbox,
        relation: Relation, 
        table: Table, 
        formReference: FormReference, 
    },
    view: {
        tags: Tags,
        text: TextView
    }
}

// export const ModelComponents = () => {
//     return {
//         list: modelList,
//         item: modelItem
//     }
// }
// export const InputComponents = {
//     text: TextField,
//     dropdown: Dropdown,
//     checkbox: Checkbox 
// }

export const Actions = {
    LIST: 'LIST',
    CREATE: 'CREATE',
    EDIT: 'EDIT',
    REMOVE: 'REMOVE'
}

export const ModelRoutes = () => {
    let c = Components.model,
    // let c = ModelComponents(),
        // props = ModelRoutingProps(model, domain),
        routes = ModelRoutesAndNames().routes,
        actions = Actions,
        names = ModelRoutesAndNames().names


    // todo dynamic load components, these components must be generic
    return [
        { name: names.LIST, path: routes.LIST, component: c.list, props: true, meta: { action: actions.LIST } },
        { name: names.CREATE, path: routes.CREATE, component: c.item, props: true, meta: { action: actions.CREATE } },
        { name: names.CREATE_ENTRY, path: routes.CREATE_ENTRY, component: c.item, props: true, meta: { action: actions.CREATE } },
        { name: names.EDIT, path: routes.EDIT, component: c.item, props: true, meta: { action: actions.EDIT } },
    ]
}

export const ModelBreadcrumbs = (model, domain) => {
    let names = ModelRoutesAndNames().names,
        labels = ModelLabels(model)

    return { 
        [names.LIST]:   [names.DOMAIN, names.LIST],
        [names.CREATE]: [names.DOMAIN, names.LIST, names.CREATE],
        // todo add layout name in breadcrumbs
        [names.CREATE_ENTRY]: [names.DOMAIN, names.LIST, names.CREATE_ENTRY],
        [names.EDIT]:   [names.DOMAIN, names.LIST, names.EDIT]



        // [names.LIST]:   domain ? [names.DOMAIN, names.LIST]
        //                        : [names.LIST],
        // [names.CREATE]: domain ? [names.DOMAIN, names.LIST, names.CREATE]
        //                        : [names.LIST, names.CREATE],
        // [names.EDIT]:   domain ? [names.DOMAIN, names.LIST, names.EDIT]
        //                        : [names.LIST, names.EDIT],
    }
}

export const ModelNotifications = (model, domain) => {
    let labels = ModelLabels(model),
        events = ModelEventNames(model)

    return { 
        [events.CREATED]: { type: 'is-success', text: labels.CREATED }, 
        [events.EDITED]: { type: 'is-success', text: labels.EDITED }, 
        [events.REMOVED]: { type: 'is-success', text: labels.REMOVED }, 
    }
}

// console.log('Model breadcrumbs');
// console.log(MergeModelObjects(ModelBreadcrumbs));
// console.log('Model notification');
// console.log(MergeModelObjects(ModelNotifications));

export const DomainModelUrlNames = () => {
    let domainModelUrlNames = {}
    for (let key in Models) {
        let domain = Models[key].domain
        if (domain) {
            if (!domainModelUrlNames.hasOwnProperty(domain)) {
                domainModelUrlNames[domain] = {}
            }
            domainModelUrlNames[domain][key] = ModelRoutesAndNames().names.LIST
        }
    }
    return domainModelUrlNames
}


export const Breadcrumbs = MergeModelObjects(ModelBreadcrumbs)
// console.log(Breadcrumbs);
export const Notifications = { ...MergeModelObjects(ModelNotifications), 
    'failed': { type: 'is-danger', text: 'Oeps! Er ging iets mis' }
}
// console.log(Notifications);
 

// export const Breadcrumbs = {
//     'form-layouts': ['forms', 'form-layouts'],
//     'form-layouts-edit': ['forms', 'form-layouts', 'form-layouts-edit'],
//     'form-layouts-create': ['forms', 'form-layouts', 'form-layouts-create'],
//     'form-entries': ['forms', 'form-entries'],
//     'form-entries-edit': ['forms', 'form-entries', 'form-entries-edit'],
//     'form-entries-create': ['forms', 'form-entries', 'form-entries-create'],
//     'categories': ['properties', 'categories'],
//     'categories-edit': ['properties', 'categories', 'categories-edit'],
//     'categories-create': ['properties', 'categories', 'categories-create'],
//     'initiatives': ['groups', 'initiatives'],
//     'initiatives-edit': ['groups', 'initiatives', 'initiatives-edit'],
//     'initiatives-create': ['groups', 'initiatives', 'initiatives-create'],
//     'organisations': ['groups', 'organisations'],
//     'organisations-edit': ['groups', 'organisations', 'organisations-edit'],
//     'organisations-create': ['groups', 'organisations', 'organisations-create'],
// }

// export const Notifications = {
//     'form-layout-updated': { type: 'is-success', text: 'Layout gewijzigd' },
//     'form-layout-removed': { type: 'is-success', text: 'Layout verwijderd' },
//     'form-entry-added': { type: 'is-success', text: 'Entry toegevoegd' },
//     'form-entry-updated': { type: 'is-success', text: 'Entry gewijzigd' },
//     'form-entry-removed': { type: 'is-success', text: 'Entry verwijderd' },
//     'category-added': { type: 'is-success', text: 'Categorie toegevoegd' },
//     'category-updated': { type: 'is-success', text: 'Categorie gewijzigd' },
//     'category-removed': { type: 'is-success', text: 'Categorie verwijderd' },
//     'initiative-added': { type: 'is-success', text: 'Initiatief toegevoegd' },
//     'initiative-updated': { type: 'is-success', text: 'Initiatief gewijzigd' },
//     'initiative-removed': { type: 'is-success', text: 'Initiatief verwijderd' },
//     'organisation-added': { type: 'is-success', text: 'Organisatie toegevoegd' },
//     'organisation-updated': { type: 'is-success', text: 'Organisatie gewijzigd' },
//     'organisation-removed': { type: 'is-success', text: 'Organisatie verwijderd' },
//     'failed': { type: 'is-danger', text: 'Oeps! Er ging iets mis' },
//     'forgot-initiative': { type: 'is-danger', text: 'Kies een initiatief!' },
// }

export default {}