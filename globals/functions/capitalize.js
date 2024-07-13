function capitalize(text) {
    let capitalized = '';
    if (text) {
        capitalized = text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
    }
    return capitalized;
}

export default capitalize;
