import {allowPrint} from "../GlobalsAndConstants";

function printInConsole(text) {
    if (allowPrint) console.log(text);
}

export default printInConsole;
