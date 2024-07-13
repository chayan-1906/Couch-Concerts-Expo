import {fetchFromLocalStorage} from "./async-storage";

async function getCurrentUser() {
    let currentUser = {
        isLoggedIn: await fetchFromLocalStorage('authToken') && await fetchFromLocalStorage('personId'),
        personId: await fetchFromLocalStorage('personId'),
        authToken: await fetchFromLocalStorage('authToken'),
        isArtist: await fetchFromLocalStorage('isArtist'),
        isVenue: await fetchFromLocalStorage('isArtist'),
        artists: await fetchFromLocalStorage('artists'),
        venues: await fetchFromLocalStorage('venues'),
    };

    return currentUser;
}

export default getCurrentUser;
