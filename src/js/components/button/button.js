import makeElement from '~/src/js/utils/makeElement'

const button = function (label="ui button") {
    const template = `<button>${label}</button>`
    const element = makeElement(template)
    
    return element
}

export default button