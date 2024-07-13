function isObjEmpty(object) {
    // if object null or no of keys is 0 => return true
    return !object || Object.keys(object).length === 0
}

export default isObjEmpty;
