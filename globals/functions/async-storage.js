import AsyncStorage from "@react-native-async-storage/async-storage";
import printInConsole from "./printInConsole";

export const storeInLocalStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        printInConsole(`inside catch of storeInLocalStorage: ${e}`);
    }
}

export const fetchFromLocalStorage = async (key) => {
    try {
        // let keys = await AsyncStorage.getAllKeys();
        // printInConsole(keys);

        let fetchedStringData = await AsyncStorage.getItem(key);
        printInConsole(`fetchedStringData: ${fetchedStringData}`);
        let fetchedData;
        if (fetchedStringData) fetchedData = JSON.parse(fetchedStringData);
        printInConsole(`fetchFromLocalStorage: ${fetchedData}`);
        printInConsole(`fetchFromLocalStorage: ${typeof fetchedData}`);
        return fetchedData;
    } catch (e) {
        printInConsole(`inside catch of fetchFromLocalStorage: ${e}`);
    }
}

export const removeFromLocalStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        printInConsole(`inside catch of removeFromLocalStorage: ${e}`);
    }
}

export const clearLocalStorage = async () => {
    await AsyncStorage.clear();
    printInConsole('storage cleared');
}
