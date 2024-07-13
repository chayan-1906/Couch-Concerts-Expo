import printInConsole from "./printInConsole";

async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        printInConsole('inside catch; Failed to copy: ', err);
        return false;
    }
}

export default copyTextToClipboard;
