import {
    ACCEPT_INVITE_BEGIN,
    ACCEPT_INVITE_ERROR,
    ACCEPT_INVITE_SUCCESS,
    CREATE_ACCEPT_INVITE_BEGIN,
    CREATE_ACCEPT_INVITE_ERROR,
    CREATE_ACCEPT_INVITE_SUCCESS,
    CREATE_INVITE_BEGIN,
    CREATE_INVITE_ERROR,
    CREATE_INVITE_SUCCESS,
    CREATE_NEW_PERSON_BEGIN,
    CREATE_NEW_PERSON_ERROR,
    CREATE_NEW_PERSON_SUCCESS,
    CREATE_NEW_VENUE_BEGIN,
    CREATE_NEW_VENUE_ERROR,
    CREATE_NEW_VENUE_SUCCESS,
    DECLINE_INVITE_BEGIN,
    DECLINE_INVITE_ERROR,
    DECLINE_INVITE_SUCCESS,
    DISCOVER_BEGIN,
    DISCOVER_ERROR,
    DISCOVER_SUCCESS,
    EXPLORE_BEGIN,
    EXPLORE_ERROR,
    EXPLORE_SUCCESS,
    GET_ARTIST_BY_ID_BEGIN,
    GET_ARTIST_BY_ID_ERROR,
    GET_ARTIST_BY_ID_SUCCESS,
    GET_EVENT_BY_ID_BEGIN,
    GET_EVENT_BY_ID_ERROR,
    GET_EVENT_BY_ID_SUCCESS,
    GET_EVENT_BY_INVITE_ID_BEGIN,
    GET_EVENT_BY_INVITE_ID_ERROR,
    GET_EVENT_BY_INVITE_ID_SUCCESS,
    GET_INVITE_DETAILS_BY_INVITE_ID_BEGIN,
    GET_INVITE_DETAILS_BY_INVITE_ID_ERROR,
    GET_INVITE_DETAILS_BY_INVITE_ID_SUCCESS,
    GET_PERSON_BY_ID_BEGIN,
    GET_PERSON_BY_ID_ERROR,
    GET_PERSON_BY_ID_SUCCESS,
    MY_DETAILS_PERSON_BEGIN,
    MY_DETAILS_PERSON_ERROR,
    MY_DETAILS_PERSON_SUCCESS,
    SEND_OTP_BEGIN,
    SEND_OTP_ERROR,
    SEND_OTP_SUCCESS,
    UPDATE_PERSON_BEGIN,
    UPDATE_PERSON_ERROR,
    UPDATE_PERSON_SUCCESS,
    VERIFY_OTP_BEGIN,
    VERIFY_OTP_ERROR,
    VERIFY_OTP_SUCCESS
} from './Actions.jsx'

const CouchConcertsReducer = (state, action) => {
    switch (action.type) {
        /** SEND OTP */
        case SEND_OTP_BEGIN:
            return {...state, send_otp_loading: true, send_otp_success: false, send_otp_error: false, verify_otp_success: false}
        case SEND_OTP_SUCCESS:
            return {...state, send_otp_loading: false, send_otp_success: true, send_otp_error: false, verify_otp_success: false}
        case SEND_OTP_ERROR:
            return {...state, send_otp_loading: false, send_otp_success: false, send_otp_error: true, verify_otp_success: false}

        /** VERIFY OTP */
        case VERIFY_OTP_BEGIN:
            return {...state, verify_otp_loading: true, verify_otp_success: false, verify_otp_error: false, verify_otp_response: null}
        case VERIFY_OTP_SUCCESS:
            return {
                ...state,
                verify_otp_loading: false,
                verify_otp_success: true,
                verify_otp_error: false,
                verify_otp_response: action.payload,
                person: action.payload.person,
            }
        case VERIFY_OTP_ERROR:
            return {...state, verify_otp_loading: false, verify_otp_success: false, verify_otp_error: action.payload, verify_otp_response: null}

        /** CREATE NEW PERSON */
        case CREATE_NEW_PERSON_BEGIN:
            return {...state, create_new_person_loading: true, create_new_person_success: false, create_new_person_error: false, create_new_person_response: null}
        case CREATE_NEW_PERSON_SUCCESS:
            return {
                ...state,
                verify_otp_success: false,
                create_new_person_loading: false,
                create_new_person_success: true,
                create_new_person_error: false,
                create_new_person_response: action.payload,
                person: action.payload.person,
            }
        case CREATE_NEW_PERSON_ERROR:
            return {...state, create_new_person_loading: false, create_new_person_success: false, create_new_person_error: action.payload, create_new_person_response: null}

        /** CREATE NEW VENUE */
        case CREATE_NEW_VENUE_BEGIN:
            return {...state, create_new_venue_loading: true, create_new_venue_success: false, create_new_venue_error: false, create_new_venue_response: null}
        case CREATE_NEW_VENUE_SUCCESS:
            return {
                ...state,
                create_new_venue_loading: false,
                create_new_venue_success: true,
                create_new_venue_error: false,
                create_new_venue_response: action.payload,
                venue: action.payload.venue,
            }
        case CREATE_NEW_VENUE_ERROR:
            return {...state, create_new_venue_loading: false, create_new_venue_success: false, create_new_venue_error: action.payload, create_new_venue_response: null}

        /** UPDATE PERSON */
        case UPDATE_PERSON_BEGIN:
            return {...state, update_person_loading: true, update_person_success: false, update_person_error: false}
        case UPDATE_PERSON_SUCCESS:
            return {
                ...state,
                update_person_loading: false,
                update_person_success: true,
                update_person_error: false,
            }
        case UPDATE_PERSON_ERROR:
            return {...state, update_person_loading: false, update_person_success: false, update_person_error: action.payload}

        /** MY DETAILS PERSON */
        case MY_DETAILS_PERSON_BEGIN:
            return {
                ...state,
                my_details_person_loading: true,
                my_details_person_success: false,
                my_details_person_error: false
            }
        case MY_DETAILS_PERSON_SUCCESS:
            return {
                ...state,
                my_details_person_loading: false,
                my_details_person_success: true,
                my_details_person_error: false,
                person: action.payload,
            }
        case MY_DETAILS_PERSON_ERROR:
            return {
                ...state,
                my_details_person_loading: false,
                my_details_person_success: false,
                my_details_person_error: true
            }

        /** GET PERSON BY ID */
        case GET_PERSON_BY_ID_BEGIN:
            return {
                ...state,
                get_person_by_id_loading: true,
                get_person_by_id_success: false,
                get_person_by_id_error: false
            }
        case GET_PERSON_BY_ID_SUCCESS:
            return {
                ...state,
                get_person_by_id_loading: false,
                get_person_by_id_success: true,
                get_person_by_id_error: false,
                person: action.payload,
            }
        case GET_PERSON_BY_ID_ERROR:
            return {
                ...state,
                get_person_by_id_loading: false,
                get_person_by_id_success: false,
                get_person_by_id_error: true
            }

        /** DISCOVER */
        case DISCOVER_BEGIN:
            return {...state, discover_loading: true, discover_success: false, discover_error: false}
        case DISCOVER_SUCCESS:
            return {
                ...state,
                discover_loading: false,
                discover_success: true,
                discover_response: action.payload,
                discover_error: false,
            }
        case DISCOVER_ERROR:
            return {...state, discover_loading: false, discover_success: false, discover_error: true, discover_response: null}

        /** EXPLORE */
        case EXPLORE_BEGIN:
            return {...state, explore_loading: true, explore_models: []}
        case EXPLORE_SUCCESS:
            return {
                ...state,
                explore_loading: false,
                explore_models: action.payload,
            }
        case EXPLORE_ERROR:
            return {...state, explore_loading: false, explore_error: true, explore_models: []}

        /** GET EVENT BY ID */
        case GET_EVENT_BY_ID_BEGIN:
            return {...state, get_event_by_id_loading: true, event: null}
        case GET_EVENT_BY_ID_SUCCESS:
            return {
                ...state,
                get_event_by_id_loading: false,
                event: action.payload,
                get_event_by_id_error: false,
            }
        case GET_EVENT_BY_ID_ERROR:
            return {...state, get_event_by_id_loading: false, get_event_by_id_error: true, event: null}

        /** GET EVENT BY INVITE ID */
        case GET_EVENT_BY_INVITE_ID_BEGIN:
            return {...state, get_event_by_invite_id_loading: true, event: null}
        case GET_EVENT_BY_INVITE_ID_SUCCESS:
            return {
                ...state,
                get_event_by_invite_id_loading: false,
                event: action.payload,
                get_event_by_id_error: false,
            }
        case GET_EVENT_BY_INVITE_ID_ERROR:
            return {...state, get_event_by_invite_id_loading: false, get_event_by_invite_id_error: true, event: null}

        /** GET INVITE DETAILS BY INVITE ID */
        case GET_INVITE_DETAILS_BY_INVITE_ID_BEGIN:
            return {
                ...state,
                get_invite_details_by_invite_id_loading: true,
                get_invite_details_by_invite_id_success: false,
                invite: null,
                get_invite_details_by_invite_id_error: false
            }
        case GET_INVITE_DETAILS_BY_INVITE_ID_SUCCESS:
            return {
                ...state,
                get_invite_details_by_invite_id_loading: false,
                get_invite_details_by_invite_id_success: true,
                invite: action.payload,
                get_invite_details_by_invite_id_error: false,
            }
        case GET_INVITE_DETAILS_BY_INVITE_ID_ERROR:
            return {
                ...state,
                get_event_by_invite_id_loading: false,
                get_invite_details_by_invite_id_success: false,
                invite: null,
                get_invite_details_by_invite_id_error: true,
            }

        /** GET ARTIST BY ID */
        case GET_ARTIST_BY_ID_BEGIN:
            return {...state, get_artist_by_id_loading: true, artist: null}
        case GET_ARTIST_BY_ID_SUCCESS:
            return {
                ...state,
                get_artist_by_id_loading: false,
                artist: action.payload,
                upcoming_events_list: action.payload.eventsPerformed,
                past_events_list: action.payload.pastEventsPerformed,
                get_artist_error: false,
            }
        case GET_ARTIST_BY_ID_ERROR:
            return {...state, get_artist_by_id_loading: false, get_artist_error: true, artist: null}

        /** CREATE INVITE */
        case CREATE_INVITE_BEGIN:
            return {...state, create_invite_loading: true, create_invite_event_id: action.payload}
        case CREATE_INVITE_SUCCESS:
            return {
                ...state,
                create_invite_loading: false,
                create_invite_success: true,
                create_invite_response: action.payload.invite,
                invite: action.payload.invite,
            }
        case CREATE_INVITE_ERROR:
            return {
                ...state,
                create_invite_loading: false,
                create_invite_success: false,
                create_invite_error: true,
            }

        /** ACCEPT INVITE */
        case ACCEPT_INVITE_BEGIN:
            return {...state, accept_invite_loading: true, accept_invite_event_id: action.payload}
        case ACCEPT_INVITE_SUCCESS:
            return {
                ...state,
                accept_invite_loading: false,
                accept_invite_success: true,
                accept_invite_response: action.payload,
            }
        case ACCEPT_INVITE_ERROR:
            return {
                ...state,
                accept_invite_loading: false,
                accept_invite_success: false,
                accept_invite_error: true,
            }

        /** DECLINE INVITE */
        case DECLINE_INVITE_BEGIN:
            return {...state, decline_invite_loading: true, decline_invite_success: false, decline_invite_event_id: action.payload}
        case DECLINE_INVITE_SUCCESS:
            if (state.invite) {
                state.invite.status = 'NOTATTENDING';
            }
            if (state.event?.myInvite) {
                state.event.myInvite.status = 'NOTATTENDING';
            }
            return {
                ...state,
                decline_invite_loading: false,
                decline_invite_success: true,
                decline_invite_response: action.payload,
            }
        case DECLINE_INVITE_ERROR:
            return {...state, decline_invite_loading: false, decline_invite_success: false, decline_invite_error: true}

        /** CREATE ACCEPT INVITE */
        case CREATE_ACCEPT_INVITE_BEGIN:
            return {
                ...state,
                create_accept_invite_loading: true,
                create_accept_invite_success: false,
                create_accept_invite_error: false,
                create_accept_invite_event_id: action.payload,
            }
        case CREATE_ACCEPT_INVITE_SUCCESS:
            return {
                ...state,
                create_accept_invite_loading: false,
                create_accept_invite_success: true,
                create_accept_invite_error: false,
                create_accept_invite_response: action.payload,
            }
        case CREATE_ACCEPT_INVITE_ERROR:
            return {
                ...state,
                create_accept_invite_loading: false,
                create_accept_invite_success: false,
                create_accept_invite_error: true,
                create_accept_invite_event_id: null,
            }
    }
    return {...state}
}

export default CouchConcertsReducer;
