import isListEmpty from "./functions/isListEmpty";
import getCurrentUser from "./functions/getCurrentUser";
import getCurrentDateTime from "./functions/getCurrentDateTime";

/** test */
export const base_url = 'https://test.couchconcerts.com';
// export const base_url = 'http://192.168.0.8:8080';

/** prod */
// export const base_url = 'https://prod.couchconcerts.com';

export const send_otp_url = `${base_url}/otp/sms`;

export const verify_otp_url = `${base_url}/otp/verify`;

export const create_new_person_url = `${base_url}/person`;

export const create_new_venue_url = `${base_url}/venues`;

export const update_person_url = `${base_url}/person`;

export const my_details_person_url = (pastEvents = false) => `${base_url}/myDetails/person?pastEvents=${pastEvents}`;

export const get_person_by_id_url = (personId) => `${base_url}/person?personId=${personId}`;

export const delete_person_url = (personId) => `${base_url}/person?personId=${personId}`;

export const discover_url = async () => {
    let currentUser = await getCurrentUser();

    let url = `${base_url}/discover?`;
    if (currentUser.isLoggedIn) {
        url = url + `personId=${currentUser.personId}&`;
    }
    url = url + `lastMidnight=${getCurrentDateTime()}`;
    return url;
};

export const search_url = ({modelsToSearch, searchTerm}) => {
    let url = `${base_url}/search`;
    if (!isListEmpty(modelsToSearch)) {
        url += `?categories=${modelsToSearch[0]}`;
    }
    for (let i = 1; i < modelsToSearch.length; i++) {
        url += `&categories=${modelsToSearch[i]}`;
    }
    // if (fetchFromLocalStorage('personId')) url += `&personId=${fetchFromLocalStorage('personId')}`;
    if (searchTerm) url += `&searchTerm=${searchTerm}`;
    url += `&lastMidnight=${new Date().toJSON().toString().substring(0, 10)}`;
    return url;
}

export const explore_url = ({modelToSearch, currentUser, searchTerm, /*genres, performanceType, following, crew*/}) => {
    let url = `${base_url}/search?categories=${modelToSearch}`;
    if (currentUser?.personId) url += `&personId=${currentUser?.personId}`;
    if (currentUser?.venueId) url += `&venueId=${currentUser?.venues?.[0]}`;
    if (searchTerm) url += `&searchTerm=${searchTerm}`;
    url += `&lastMidnight=${new Date().toJSON().toString().substring(0, 10)}`;
    return url;
}

export const get_artist_by_id_url = ({isLoggedIn, artistId, personId, pastEventsPerformed = false}) => {
    let url = `${base_url}/artists?artistId=${artistId}`;
    if (isLoggedIn) url += `&personId=${personId}`;
    url += `&pastEventsPerformed=${pastEventsPerformed}`;
    return url;
}

export const upload_file_url = `${base_url}/file`;

export const get_event_by_id_url = ({eventId, personId}) => {
    let url = `${base_url}/events?eventId=${eventId}`;
    if (personId) url += `&personId=${personId}`;
    return url;
}

export const get_event_by_invite_id_url = ({inviteId, personId}) => {
    let url = `${base_url}/events/eventByInviteId?inviteId=${inviteId}&personId=${personId}`;
    return url;
}

export const get_invite_details_by_invite_id_url = (inviteId) => `${base_url}/invites/details?inviteId=${inviteId}`

export const create_invite_url = `${base_url}/invites`;

export const accept_invite_url = (inviteId, channel, quantity) => `${base_url}/web/invite/accept/${inviteId}?viaChannel=${channel}&quantity=${quantity}`;

export const decline_invite_url = (inviteId, channel, declineReason) => `${base_url}/web/invite/decline/${inviteId}?viaChannel=${channel}&declineReason=${declineReason}`;

export const follow_artist_url = `${base_url}/artists/follow`;

export const unfollow_artist_url = `${base_url}/artists/unFollow`;
