
export const UrlNamesToLabels = (model, domain) => {
    let props = ModelRoutingLabelsAndUrls(model, domain) 
    let names = props.names
    let labels = props.labels
    let nameToLabels = {}

    for (let key in names) {
        nameToLabels[names[key]] = labels[key]
    }

    return nameToLabels
}
