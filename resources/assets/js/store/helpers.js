

import {    Urls, 
            Domains, 
            Models, 
            MergeModelObjects, 
            ModelEventNames, 
            ModelDomainString, 
            ModelRoutingLabelsAndUrls, 
            Statics, 
            ModelRoutesAndNames,
            Notifications 

       } from '../config.js'

import { Router } from '../routes.js'



// import commit and dispatch
// import urls


// crud functions
// domain is always plural?
// capitalize domain?

let s = Statics


function addItem(state, item, domain, model) {
    // todo add validation
    // from contentful: required, unique, limit characters, pattern, specified values
    // patterns: e-mail, url, dates, see contentful
    // email: ^\w[\w.-]*@([\w-]+\.)+[\w-]+$
    // url: ^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$
    // date (EU): ^(0?[1-9]|[12][0-9]|3[01])[- \/.](0?[1-9]|1[012])[- \/.](19|20)?\d\d$
    // 24 time: ^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$
    // let validated = validation(item)
    state[domain][model].push(item)
}

function handleError(dispatch, error, message = 'failed') {
    console.log(error); 
    dispatch(s.SET_NOTIFICATION, Notifications[message])
}

// not used
// export const ModelState = (model, domain) => { 
//     return domain ? { [domain]: { [model]: [] } }
//                   : { [model]: [] }
// }
// export const ModelLoadedState = (model) => { 
//     return { [model]: false }
// }

export const SetState = () => { 
    let state = {}

    state.loaded = {}

    // Model and loaded state
    for (let key in Models) {
        let model = Models[key]
        if (model.domain) 
            state[model.domain] = { ...state[model.domain], [key]: [] }
        else 
            state[key] = []

        state.loaded[key] = false
    }
    return state
}

export const SetGetters = () => {
    // model getters
    let getters = MergeModelObjects(ModelGetters)

    // loaded getter
    getters = { ...getters, ...ModelGetters('loaded') }

    return getters;
}

export const SetMutations = () => { 
    return MergeModelObjects(ModelMutations)
}

export const SetActions = () => { 
    return MergeModelObjects(ModelActions)
}

export const ModelGetters = (model, domain) => { 
    let m = ModelEventNames(model)

    return {
        [model]: state => domain ? state[domain][model] : state[model],
        [m.FIND]: (state, getters) => (id) => {
            // console.log(getters);
            // console.log(id);
            // console.log(model);
            
            return getters[model].find(item => item.id == id)
        }
    }
}

export const ModelMutations = (model, domain) => { 
    let m = ModelEventNames(model)

    return {
        [m.FILL] (state, payload) {
            state[domain][model] = []
            for (let item of payload) {
                // todo add verification
                // let verified = verification(item)
                state[domain][model].push(item)
            }
            state.loaded[model] = true;
        },
        [m.CREATE] (state, payload) {
            state[domain][model].push(payload)
        },
        [m.EDIT] (state, payload) {
            let i = state[domain][model].findIndex(item => item.id === payload.id);
            state[domain][model][i] = { ...state[domain][model][i], ...payload };
        },
        [m.REMOVE] (state, payload) {
            let i = state[domain][model].findIndex(item => item.id === payload);
            state[domain][model].splice(i, 1);
        },
    }
}

export const ModelActions = (model, domain) => { 
    let m = ModelEventNames(model)

    // todo fix this, change table names
    // if (model == 'entries') model = 'formEntries' 
    // if (model == 'layouts') model = 'formLayouts' 

    return {
        [m.FILL] ({ commit, dispatch }) {
            window.axios.get('/' + Urls.API + '/' + model).then(({ data }) => {
                commit(m.FILL, data)
            })
            .catch((error) => handleError(dispatch, error))
        },
        [m.CREATE] ({ commit, dispatch }, item) {
            window.axios.post('/' + Urls.API + '/' + model, item).then((response) => {
                // todo add to database here, success and fail flags
                commit(m.CREATE, response.data)
                dispatch(s.SET_NOTIFICATION, Notifications[m.CREATED])
                // go to list view
                Router.push({ 
                    name: ModelRoutesAndNames().names.LIST, 
                    props: { model } 
                })
            })
            .catch((error) => handleError(dispatch, error))
        },
        [m.EDIT] ({ commit, dispatch }, item) {
            console.log('item');
            console.log(item);
            window.axios.put('/' + Urls.API + '/' + model + '/' + item.id, item).then((response) => {
                commit(m.EDIT, item)
                dispatch(s.SET_NOTIFICATION, Notifications[m.EDITED])
                // go to list view
                Router.push({ 
                    name: ModelRoutesAndNames().names.LIST, 
                    props: { model } 
                })
            })
            .catch((error) => handleError(dispatch, error))
        },
        [m.REMOVE] ({ commit, dispatch }, id) {
            window.axios.delete('/' + Urls.API + '/' + model + '/' + id).then((response) => {
                commit(m.REMOVE, id)
                dispatch(s.SET_NOTIFICATION, Notifications[m.REMOVED])
            })
            .catch((error) => handleError(dispatch, error))
        },
    }
}

