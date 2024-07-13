import isListEmpty from "./isListEmpty";

function getInitialLetter(text) {
    const splits = text && text.split(' ')
    return !isListEmpty(splits) ? splits.length >= 1 ?
        `${splits[0].substring(0, 1).toLocaleUpperCase()}${splits[splits.length - 1].substring(0, 1).toLocaleUpperCase()}`
        : splits[0].substring(0, 1).toLocaleUpperCase() : ''
}

export default getInitialLetter;
