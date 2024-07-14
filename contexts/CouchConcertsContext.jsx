import React, {useContext, useEffect, useReducer, useState} from 'react';
import axios from 'axios';
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
} from '../reducers/Actions';
import {
    accept_invite_url,
    create_invite_url,
    create_new_person_url,
    create_new_venue_url,
    decline_invite_url,
    discover_url,
    explore_url,
    get_artist_by_id_url,
    get_event_by_id_url,
    get_event_by_invite_id_url,
    get_invite_details_by_invite_id_url,
    get_person_by_id_url,
    my_details_person_url,
    send_otp_url,
    update_person_url,
    verify_otp_url
} from '../globals/ApiUrls';
import CouchConcertsReducer from "../reducers/CouchConcertsReducer";
import {SOMETHING_WENT_WRONG, TRY_AGAIN} from "../globals/GlobalsAndConstants";
import printInConsole from "../globals/functions/printInConsole";
import {fetchFromLocalStorage, storeInLocalStorage} from "../globals/functions/async-storage";
import buildHeader from "../globals/functions/buildHeader";
import {showErrorToast} from "../globals/functions/showToast";

const initialState = {
    /** SEND OTP */
    send_otp_loading: false,
    send_otp_success: false,
    send_otp_error: false,

    /** VERIFY OTP */
    verify_otp_loading: false,
    verify_otp_success: false,
    verify_otp_error: false,
    verify_otp_response: null,
    person: null,

    /** CREATE NEW PERSON */
    create_new_person_loading: false,
    create_new_person_success: false,
    create_new_person_error: false,
    create_new_person_response: null,

    /** CREATE NEW VENUE */
    create_new_venue_loading: false,
    create_new_venue_success: false,
    create_new_venue_error: false,
    create_new_venue_response: null,
    venue: null,

    /** UPDATE PERSON */
    update_person_loading: false,
    update_person_success: false,
    update_person_error: false,

    /** MY DETAILS PERSON */
    my_details_person_loading: false,
    my_details_person_success: false,
    my_details_person_error: false,

    /** GET PERSON BY ID */
    get_person_by_id_loading: false,
    get_person_by_id_success: false,
    get_person_by_id_error: false,

    /** DISCOVER */
    discover_loading: false,
    discover_success: false,
    discover_response: null,
    discover_error: false,

    /** EXPLORE */
    explore_loading: false,
    explore_models: [],
    explore_error: false,

    /** GET EVENT BY ID */
    get_event_by_id_loading: false,
    event: null,
    get_event_by_id_error: false,

    /** GET EVENT BY INVITE ID */
    get_event_by_invite_id_loading: false,
    get_event_by_invite_id_error: false,

    /** GET INVITE DETAILS BY INVITE ID */
    get_invite_details_by_invite_id_loading: false,
    get_invite_details_by_invite_id_success: false,
    invite: null,
    get_invite_details_by_invite_id_error: false,

    /** GET ARTIST BY ID */
    get_artist_by_id_loading: false,
    artist: null,
    upcoming_events_list: [],
    past_events_list: [],
    get_artist_error: false,

    /** CREATE INVITE */
    create_invite_event_id: null,
    create_invite_loading: false,
    create_invite_success: false,
    create_invite_error: false,
    create_invite_response: {},

    /** ACCEPT INVITE */
    accept_invite_event_id: null,
    accept_invite_loading: false,
    accept_invite_success: false,
    accept_invite_error: false,
    accept_invite_response: {},

    /** DECLINE INVITE */
    decline_invite_event_id: null,
    decline_invite_loading: false,
    decline_invite_success: false,
    decline_invite_error: false,
    decline_invite_response: {},

    /** CREATE ACCEPT INVITE */
    create_accept_invite_event_id: null,
    create_accept_invite_loading: false,
    create_accept_invite_success: false,
    create_accept_invite_error: false,
    create_accept_invite_response: {},
}

const CouchConcertsContext = React.createContext();

export const CouchConcertsProvider = ({children}) => {
    const [state, dispatch] = useReducer(CouchConcertsReducer, initialState);
    const [authToken, setAuthToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [selectedArea, setSelectedArea] = useState({'callingCode': '+1', 'code': 'US', 'flag': 'https://flagsapi.com/US/flat/64.png', 'item': 'United States of America'});

    /* APIS --- START */
    /** AUTH APIS */
    const sendOtpApi = async (phoneNumber) => {
        printInConsole('sendOtpApi called');
        try {
            dispatch({type: SEND_OTP_BEGIN});
            printInConsole(`sendOtpApi url: ${send_otp_url}`);
            const response = await axios.post(send_otp_url, {
                'phoneNumber': phoneNumber,
            }, {
                headers: {'Content-Type': 'application/json'},
            })
            printInConsole(`sendOtpApi response status: ${response.status}`);
            // printInConsole(`sendOtpApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 201) {
                const responseData = response.data;
                dispatch({type: SEND_OTP_SUCCESS, payload: responseData});
            }
            // return response.data
        } catch (error) {
            dispatch({type: SEND_OTP_ERROR, payload: error.message});
            printInConsole(`sendOtpApi error: ${error.message}`);
            showErrorToast({title: 'Error', description: SOMETHING_WENT_WRONG});
            // navigate(errorPath)
            // return null
        }
    }

    const verifyOtpApi = async (phoneNumber, otp) => {
        printInConsole('verifyOtpApi called');
        try {
            dispatch({type: VERIFY_OTP_BEGIN});
            printInConsole(`verifyOtpApi url: ${verify_otp_url}`);
            printInConsole(`otp: ${otp}`);
            const response = await axios.post(verify_otp_url, {
                'receivingAddress': phoneNumber,
                'otp': otp,
            }, {
                headers: {'Content-Type': 'application/json'},
            });
            printInConsole(`verifyOtpApi response status: ${response.status}`);
            printInConsole(`verifyOtpApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 200) {
                const responseData = response.data;
                if (response.data.flow.toLowerCase() === 'login' && response.data.authToken && response.data.person?.personId) {
                    if (response.data.person.status.toLowerCase() !== 'invited') {
                        setAuthToken(responseData.authToken);
                        await storeInLocalStorage('authToken', responseData.authToken);
                        await storeInLocalStorage('personId', responseData.person.personId);
                        await storeInLocalStorage('isArtist', responseData.person.isArtist);
                        await storeInLocalStorage('isVenue', responseData.person.isVenue);
                        await storeInLocalStorage('artists', responseData.person.artists);
                        await storeInLocalStorage('venues', responseData.person.venues);
                        // toast({title: 'Success!', description: 'You are now logged in'});
                    } else {
                        // setTimeout(() => {
                        // router.replace(registerPath(phoneNumber, {authToken: responseData.authToken}));
                        // }, 500);
                    }
                }
                dispatch({type: VERIFY_OTP_SUCCESS, payload: responseData});
            }
            // return response.data;
        } catch (error) {
            dispatch({type: VERIFY_OTP_ERROR, payload: error});
            printInConsole(`verifyOtpApi error: ${error.message}`);
            if (error.response.status === 403) {
                // toast({title: 'Failed!', description: 'Invalid Code', variant: 'destructive'});
            } else {
                // navigate(errorPath)
                // toast({title: SOMETHING_WENT_WRONG, description: TRY_AGAIN, variant: 'destructive'});
            }
            // return null
        }
    }

    /* combined api, creates person and venue */
    const createNewPersonApi = async ({createNewPersonRequestBody, createNewVenueRequestBody}) => {
        printInConsole('createNewPersonApi called');
        try {
            dispatch({type: CREATE_NEW_PERSON_BEGIN});
            printInConsole(`createNewPersonApi url: ${create_new_person_url}`);
            const response = await axios.post(create_new_person_url, createNewPersonRequestBody, {
                headers: {'Content-Type': 'application/json'},
            });
            printInConsole(`createNewPersonApi response status: ${response.status}`);
            printInConsole(`createNewPersonApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 201) {
                const responseData = response.data;
                if (response.data.authToken && response.data.person?.personId) {
                    storeInLocalStorage('authToken', responseData.authToken);
                    setAuthToken(responseData.authToken);
                    storeInLocalStorage('personId', responseData.person.personId);
                    storeInLocalStorage('isArtist', responseData.person.isArtist);
                    storeInLocalStorage('isVenue', responseData.person.isVenue);
                    storeInLocalStorage('artists', responseData.person.artists);
                    storeInLocalStorage('venues', responseData.person.venues);

                    /** create venue */
                    createNewVenueRequestBody['personId'] = response.data.person?.personId;
                    await createNewVenueApi({createNewVenueRequestBody: createNewVenueRequestBody});

                    // if (!login_to_pay) {
                    toast({title: 'Success!', description: 'You are now registered'});
                    router.back();
                    // }

                    // toast({title: 'Success!', description: 'You are now registered'});
                    // refreshBrowser();
                }

                dispatch({type: CREATE_NEW_PERSON_SUCCESS, payload: responseData});
            }
            // return response.data;
        } catch (error) {
            dispatch({type: CREATE_NEW_PERSON_ERROR, payload: error});
            printInConsole(`createNewPersonApi error: ${error.message}`);
            toast({title: SOMETHING_WENT_WRONG, description: TRY_AGAIN, variant: 'destructive'});
            // return null
        }
    }

    const createNewVenueApi = async ({createNewVenueRequestBody}) => {
        printInConsole('createNewVenueApi called');
        try {
            dispatch({type: CREATE_NEW_VENUE_BEGIN});
            printInConsole(`createNewVenueApi url: ${create_new_person_url}`);
            const response = await axios.post(create_new_venue_url, createNewVenueRequestBody, {
                headers: {'Content-Type': 'application/json'},
            });
            printInConsole(`createNewVenueApi response status: ${response.status}`);
            printInConsole(`createNewVenueApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 201) {
                const responseData = response.data;
                dispatch({type: CREATE_NEW_VENUE_SUCCESS, payload: responseData});

                // toast({title: 'Success!', description: 'Venue created'});
            }
            // return response.data;
        } catch (error) {
            dispatch({type: CREATE_NEW_VENUE_ERROR, payload: error});
            printInConsole(`createNewVenueApi error: ${error.message}`);
            // toast({title: SOMETHING_WENT_WRONG, description: TRY_AGAIN, variant: 'destructive'});
            // return null
        }
    }

    /* combined api, updates person and creates venue */
    const updatePersonApi = async ({updatePersonRequestBody, createNewVenueRequestBody}) => {
        printInConsole('updatePersonApi called');
        try {
            dispatch({type: UPDATE_PERSON_BEGIN});
            printInConsole(`updatePersonApi url: ${create_new_person_url}`);
            const response = await axios.put(update_person_url, updatePersonRequestBody, {
                headers: {'Content-Type': 'application/json'},
            });
            printInConsole(`updatePersonApi response status: ${response.status}`);
            printInConsole(`updatePersonApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 201) {
                const responseData = response.data;
                if (response.data.authToken && response.data.person?.personId) {
                    /** create venue */
                    createNewVenueRequestBody['personId'] = response.data.person?.personId;
                    await createNewVenueApi({createNewVenueRequestBody: createNewVenueRequestBody});

                    router.back();
                }

                dispatch({type: UPDATE_PERSON_SUCCESS, payload: responseData});
            }
            // return response.data;
        } catch (error) {
            dispatch({type: UPDATE_PERSON_ERROR, payload: error});
            printInConsole(`updatePersonApi error: ${error.message}`);
            toast({title: SOMETHING_WENT_WRONG, description: TRY_AGAIN, variant: 'destructive'});
            // return null
        }
    }

    const myDetailsPersonApi = async (pastEvents = false, token) => {
        printInConsole(`myDetailsPersonApi called - ${token}`);
        try {
            dispatch({type: MY_DETAILS_PERSON_BEGIN});
            printInConsole(`myDetailsPersonApi url: ${my_details_person_url(pastEvents)}`);
            const response = await axios.get(my_details_person_url(pastEvents),
                {
                    headers: buildHeader(isLoggedIn, token)
                }
            );
            printInConsole(`myDetailsPersonApi response status: ${response.status}`);
            // printInConsole(`myDetailsPersonApi response body: ${JSON.stringify(response.data.person)}`);
            if (response.status === 200) {
                const responseData = response.data.person;
                storeInLocalStorage('personId', responseData.personId);
                storeInLocalStorage('isArtist', responseData.isArtist);
                storeInLocalStorage('isVenue', responseData.isVenue);
                storeInLocalStorage('artists', responseData.artists);
                storeInLocalStorage('venues', responseData.venues);

                // storeInLocalStorage('artists', JSON.stringify(response.data.artists.map(artist => artist.artistId)));
                // storeInLocalStorage('venues', JSON.stringify(response.data.venues.map(venue => venue.venueId)));
                dispatch({type: MY_DETAILS_PERSON_SUCCESS, payload: responseData});
            }
            // return response.data;
        } catch (error) {
            dispatch({type: MY_DETAILS_PERSON_ERROR, payload: error.message});
            printInConsole(`myDetailsPersonApi error: ${error.message}`);
            // navigate(errorPath)
            // return null
        }
    }

    /** PERSON APIS */
    const getPersonByIdApi = async (personId) => {
        printInConsole('getPersonByIdApi called')
        try {
            dispatch({type: GET_PERSON_BY_ID_BEGIN})
            printInConsole(`getPersonByIdApi url: ${get_person_by_id_url(personId)}`)
            const response = await axios.get(get_person_by_id_url(personId),
                {
                    headers: buildHeader(isLoggedIn)
                }
            )
            printInConsole(`getPersonByIdApi response status: ${response.status}`)
            // printInConsole(`getPersonByIdApi response body: ${JSON.stringify(response.data)}`)
            if (response.status === 200) {
                const responseData = response.data.person
                // storeInLocalStorage('artists', JSON.stringify(response.data.artists.map(artist => artist.artistId)))
                // storeInLocalStorage('venues', JSON.stringify(response.data.venues.map(venue => venue.venueId)))
                dispatch({type: GET_PERSON_BY_ID_SUCCESS, payload: responseData})
            }
            // return response.data
        } catch (error) {
            dispatch({type: GET_PERSON_BY_ID_ERROR, payload: error.message})
            printInConsole(`getPersonByIdApi error: ${error.message}`)
            // navigate(errorPath)
            // return null
        }
    }

    /** DISCOVER & SEARCH APIS */
    const discoverApi = async () => {
        printInConsole('discoverApi called');
        try {
            dispatch({type: DISCOVER_BEGIN});
            let url = await discover_url();
            printInConsole(`discoverApi url: ${url}`);
            const response = await axios.get(url, {
                headers: buildHeader(isLoggedIn),
            });
            printInConsole(`discoverApi response status: ${response.status}`);
            // printInConsole(`discoverApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 200) {
                let responseData = response.data;
                dispatch({type: DISCOVER_SUCCESS, payload: responseData});
            }
            // return response.data
        } catch (error) {
            dispatch({type: DISCOVER_ERROR, payload: error.message});
            printInConsole(`discoverApi error: ${error.message}`);
        }
    }

    const exploreApi = async ({modelToSearch, searchTerm}) => {
        printInConsole('exploreApi called')
        let searchModel = modelToSearch.toLowerCase() || 'artists';
        try {
            dispatch({type: EXPLORE_BEGIN})
            let url = explore_url({
                isLoggedIn: isLoggedIn,
                modelToSearch: searchModel,
                ...(fetchFromLocalStorage('isVenue') && {venueId: fetchFromLocalStorage('venues')[0]}),
                searchTerm: searchTerm,
            });
            printInConsole(`exploreApi url: ${url}`);
            const response = await axios.get(url, {
                headers: buildHeader(isLoggedIn)
            });
            printInConsole(`exploreApi response status: ${response.status}`);
            // printInConsole(`exploreApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 200) {
                let responseData = response.data.searchResults[searchModel];
                dispatch({type: EXPLORE_SUCCESS, payload: responseData});
            }
            // return response.data
        } catch (error) {
            dispatch({type: EXPLORE_ERROR, payload: error.message});
            printInConsole(`exploreApi error: ${error.message}`);
        }
    }

    /** EVENT & INVITE APIS */
    const getEventByIdApi = async (eventId) => {
        printInConsole(`getEventByIdApi called - ${eventId}`);
        try {
            dispatch({type: GET_EVENT_BY_ID_BEGIN})
            let url = get_event_by_id_url({isLoggedIn, eventId: eventId, personId: fetchFromLocalStorage('personId')})
            printInConsole(`getEventByIdApi url: ${url}`)
            const response = await axios.get(url, {
                headers: buildHeader(isLoggedIn)
            })
            printInConsole(`getEventByIdApi response status: ${response.status}`);
            // printInConsole(`getEventByIdApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 200) {
                const responseData = response.data.event;
                dispatch({type: GET_EVENT_BY_ID_SUCCESS, payload: responseData});
            }
            // return response.data
        } catch (error) {
            dispatch({type: GET_EVENT_BY_ID_ERROR, payload: error.message});
            printInConsole(`getEventByIdApi error: ${error.message}`);
            // navigate(errorPath)
            // return null
        }
    }

    const getArtistByIdApi = async (artistId, {pastEventsPerformed = false} = {}) => {
        printInConsole('getArtistByIdApi called')
        try {
            dispatch({type: GET_ARTIST_BY_ID_BEGIN});
            let url = get_artist_by_id_url({
                isLoggedIn: isLoggedIn,
                artistId: artistId,
                personId: fetchFromLocalStorage('personId'),
                pastEventsPerformed: pastEventsPerformed,
            });
            printInConsole(`getArtistByIdApi url: ${url}`);
            const response = await axios.get(url, {
                headers: buildHeader(isLoggedIn),
            });
            printInConsole(`getArtistByIdApi response status: ${response.status}`);
            // printInConsole(`getArtistByIdApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 200) {
                const responseData = response.data.artist;
                dispatch({type: GET_ARTIST_BY_ID_SUCCESS, payload: responseData});
            }
            // return response.data
        } catch (error) {
            dispatch({type: GET_ARTIST_BY_ID_ERROR, payload: error.message});
            printInConsole(`getArtistByIdApi error: ${error.message}`);
            // navigate(errorPath)
            // return null
        }
    }

    const getEventByInviteIdApi = async (inviteId) => {
        printInConsole(`getEventByInviteIdApi called - ${inviteId}`);
        try {
            dispatch({type: GET_EVENT_BY_INVITE_ID_BEGIN});
            let url = get_event_by_invite_id_url({inviteId: inviteId, personId: fetchFromLocalStorage('personId')});
            printInConsole(`getEventByInviteIdApi url: ${url}`);
            const response = await axios.get(url, {
                headers: buildHeader(isLoggedIn),
            });
            printInConsole(`getEventByInviteIdApi response status: ${response.status}`);
            // printInConsole(`getEventByInviteIdApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 200) {
                const responseData = response.data.event;
                dispatch({type: GET_EVENT_BY_INVITE_ID_SUCCESS, payload: responseData});
            }
            // return response.data;
        } catch (error) {
            dispatch({type: GET_EVENT_BY_INVITE_ID_ERROR, payload: error.message});
            printInConsole(`getEventByInviteIdApi error: ${error.message}`);
            // navigate(errorPath)
            // return null
        }
    }

    const getInviteDetailsByInviteIdApi = async (inviteId) => {
        printInConsole(`getInviteDetailsByInviteIdApi called - ${inviteId}`);
        try {
            dispatch({type: GET_INVITE_DETAILS_BY_INVITE_ID_BEGIN});
            let url = get_invite_details_by_invite_id_url(inviteId);
            printInConsole(`getInviteDetailsByInviteIdApi url: ${url}`);
            const response = await axios.get(url, {
                headers: buildHeader(isLoggedIn),
            });
            printInConsole(`getInviteDetailsByInviteIdApi response status: ${response.status}`);
            // printInConsole(`getInviteDetailsByInviteIdApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 200) {
                const responseData = response.data;
                dispatch({type: GET_INVITE_DETAILS_BY_INVITE_ID_SUCCESS, payload: responseData});
            }
            // return response.data;
        } catch (error) {
            dispatch({type: GET_INVITE_DETAILS_BY_INVITE_ID_ERROR, payload: error.message});
            printInConsole(`getInviteDetailsByInviteIdApi error: ${error.message}`);
            // navigate(errorPath)
            // return null
        }
    }

    const createInviteApi = async ({eventId, requestBody, login_to_pay, quantity, hostFunded}) => {
        printInConsole(`createInviteApi called: ${eventId}`)
        try {
            dispatch({type: CREATE_INVITE_BEGIN, payload: eventId});
            printInConsole(`createInviteApi url: ${create_invite_url}`);
            printInConsole(`createInviteApi request body: ${JSON.stringify(requestBody)}`);
            const response = await axios.post(create_invite_url, requestBody, {
                headers: {'Content-Type': 'application/json'},
            });
            printInConsole(`createInviteApi response status: ${response.status}`);
            printInConsole(`createInviteApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 201) {
                const responseData = response.data;
                dispatch({type: CREATE_INVITE_SUCCESS, payload: responseData});
            }
            return response.data;
        } catch (error) {
            dispatch({type: CREATE_INVITE_ERROR, payload: error.message})
            console.log(`inside catch createInviteApi generic error: ${error.message}`)
            // toast({title: SOMETHING_WENT_WRONG, description: TRY_AGAIN, variant: 'destructive'});
            // return null
        }
    }

    const acceptInviteApi = async ({eventId, inviteId, quantity, channel, hostFunded}) => {
        printInConsole(`approveInviteApi called: ${eventId}`)
        try {
            dispatch({type: ACCEPT_INVITE_BEGIN, payload: eventId})
            if (!channel) channel = 'email'
            printInConsole(`acceptInviteApi url: ${accept_invite_url(inviteId, channel, quantity)}`)
            const response = await axios.get(accept_invite_url(inviteId, channel, quantity), {
                headers: {'Content-Type': 'application/json'},
            });
            printInConsole(`approveInviteApi response status: ${response.status}`);
            printInConsole(`approveInviteApi response body: ${JSON.stringify(response.data)}`);
            const responseData = response.data;
            if (response.status === 200) {
                if (!hostFunded) {
                    window.location.href = responseData.stripeCheckoutUrl;
                } else {
                    dispatch({type: ACCEPT_INVITE_SUCCESS, payload: responseData});
                }
            }
            return response.data;
        } catch (error) {
            if (error.response && (error.response.status === 400 || error.response.status === 404) && error.response.data) {
                dispatch({type: ACCEPT_INVITE_ERROR, payload: error.response.data.error.code})
                console.log(`inside catch approveInviteApi returned error: ${JSON.stringify(error.response.data)}`)
                toast({title: 'Invalid Invitation', description: 'Invitation not found', variant: 'destructive'});
            } else {
                dispatch({type: ACCEPT_INVITE_ERROR, payload: error.message})
                console.log(`inside catch approveInviteApi generic error: ${error.message}`)
                toast({title: SOMETHING_WENT_WRONG, description: TRY_AGAIN, variant: 'destructive'});
            }
            // return null
        }
    }

    const declineInviteApi = async ({inviteId, channel, declineReason}) => {
        printInConsole(`declineInviteApi called: ${inviteId}`)
        try {
            dispatch({type: DECLINE_INVITE_BEGIN})
            if (!channel) channel = 'email'
            const response = await axios.get(decline_invite_url(inviteId, channel, declineReason), {
                headers: {'Content-Type': 'application/json'},
            })
            printInConsole(`declineInviteApi url: ${decline_invite_url(inviteId, channel, declineReason)}`)
            printInConsole(`declineInviteApi response status: ${response.status}`)
            printInConsole(`declineInviteApi response body: ${JSON.stringify(response.data)}`)
            const responseData = response.data
            if (response.status === 200) {
                dispatch({type: DECLINE_INVITE_SUCCESS, payload: responseData})
                // getInviteDetailsApi(invite.inviteId)
            } else {
                dispatch({type: DECLINE_INVITE_ERROR, payload: responseData})
                printInConsole(`declineInviteApi error: ${responseData}`)
            }
            return response.data
        } catch (error) {
            dispatch({type: DECLINE_INVITE_ERROR, payload: error.message})
            console.log(`inside catch declineInviteApi generic error: ${error.message}`)
            throw error
        }
    }

    const createAcceptInviteApi = async ({eventId, requestBody, quantity, hostFunded}) => {
        printInConsole(`createInviteApi called: ${eventId}`)
        try {
            dispatch({type: CREATE_ACCEPT_INVITE_BEGIN, payload: eventId});
            printInConsole(`createAcceptInviteApi url: ${create_invite_url}`);
            printInConsole(`createAcceptInviteApi request body: ${JSON.stringify(requestBody)}`);
            const response = await axios.post(create_invite_url, requestBody, {
                headers: {'Content-Type': 'application/json'},
            });
            printInConsole(`createAcceptInviteApi response status: ${response.status}`);
            printInConsole(`createAcceptInviteApi response body: ${JSON.stringify(response.data)}`);
            if (response.status === 201) {
                const responseData = response.data;

                acceptInviteApi({
                    eventId: eventId,
                    inviteId: responseData.invite.inviteId,
                    quantity: quantity,
                    channel: 'GENERIC_EVENT_LINK',
                    hostFunded: hostFunded,
                });

                dispatch({type: CREATE_ACCEPT_INVITE_SUCCESS, payload: responseData});
            }
            return response.data;
        } catch (error) {
            if (error.response && (error.response.status === 400 || error.response.status === 404) && error.response.data) {
                dispatch({type: CREATE_ACCEPT_INVITE_ERROR, payload: error.response.data.error.code})
                console.log(`inside catch createAcceptInviteApi returned error: ${JSON.stringify(error.response.data)}`)
                toast({title: 'Invalid Invitation', description: 'Invitation not found', variant: 'destructive'});
            } else {
                dispatch({type: CREATE_ACCEPT_INVITE_ERROR, payload: error.message});
                console.log(`inside catch createAcceptInviteApi generic error: ${error.message}`);
                toast({title: SOMETHING_WENT_WRONG, description: TRY_AGAIN, variant: 'destructive'});
            }
            // return null
        }
    }

    /* APIS --- END */

    const logout = ({refresh = true}) => {
        printInConsole(`refresh - ${refresh}`)
        clearLocalStorage();
        setAuthToken('');
        setIsLoggedIn(false);
        if (refresh) toast({title: 'Success!', description: 'You are now logged out'});
        if (refresh) refreshBrowser();
    }

    /** setAuthToken in state variable */
    useEffect(() => {
        setAuthToken(fetchFromLocalStorage('authToken'));
    }, []);

    /** setIsLoggedIn */
    useEffect(() => {
        fetchFromLocalStorage('authToken').then((authToken) => {
            if (authToken) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            printInConsole(`isLoggedIn: ${isLoggedIn}`);
        });
    }, [authToken]);

    return (
        <CouchConcertsContext.Provider
            value={{
                ...state,
                isLoggedIn,
                setIsLoggedIn,
                selectedArea,
                setSelectedArea,
                sendOtpApi,
                verifyOtpApi,
                createNewPersonApi,
                createNewVenueApi,
                updatePersonApi,
                myDetailsPersonApi,
                getPersonByIdApi,
                discoverApi,
                exploreApi,
                getEventByIdApi,
                getEventByInviteIdApi,
                getInviteDetailsByInviteIdApi,
                getArtistByIdApi,
                createInviteApi,
                acceptInviteApi,
                declineInviteApi,
                createAcceptInviteApi,
                // logout,
            }}>
            {children}
        </CouchConcertsContext.Provider>
    );
}

export const useCouchConcertsContext = () => useContext(CouchConcertsContext);
