import {base_url} from "./ApiUrls";

/** test */
export let allowPrint = null;
export const setAllowPrint = () => {
    if (base_url === 'https://test.couchconcerts.com') {
        if (!fetchFromLocalStorage('allowPrint')) {
            storeInLocalStorage('allowPrint', true);
        }
        // printInConsole(`allowPrint - ${fetchFromLocalStorage('allowPrint')}`);
        allowPrint = fetchFromLocalStorage('allowPrint') === 'true' || fetchFromLocalStorage('allowPrint') === true;
    }
}

/** test cloudFrontKey */
export let cloudFrontKey = 'd1jnzllnirhwtz';

/** prod cloudFrontKey */
// export let cloudFrontKey = 'ditm14hizzx8t';

export const kGoogleApiKey = 'AIzaSyDLGS7buT51Uy4RiIa24x3yhWJw191I41Q';

export const appName = 'CouchConcerts';
export const appTagline = 'Intimate Shows Hosted by Fans';
export const appLogoUrl = 'https://res.cloudinary.com/dylkxk97e/image/upload/v1720189524/app-icon_qtxvpc.png';
// https://images.squarespace-cdn.com/content/v1/6647333eda44be5eab95a8a3/fbebbf62-c346-48b5-932c-b81c33633bfb/CouchConcertsLogo_Horizontal+%28gradient%2Bwhite%29.png?format=1500w
export const metadataKeywords = ['CouchConcerts', 'Concert', 'Music'];

/** test webClientUrl */
export const webClientUrl = 'https://app.test.couchconcerts.com';

/** prod webClientUrl */
// export const webClientUrl = 'https://app.couchconcerts.com';

export const downloadAppUrl = 'https://onelink.to/6jpu5x';

/** social urls */
export const instagramUrl = 'https://instagram.com/sonicmixer.live';
export const youtubeUrl = 'https://www.youtube.com/@SonicMixer-live';
export const facebookUrl = 'https://www.facebook.com/people/SonicMixerLive/61551825412485';

/** guideline urls */
export const guestGuidelinesUrl = 'https://www.couchconcerts.com/guest-guidelines';
export const artistGuidelinesUrl = 'https://www.couchconcerts.com/artist-guidelines';
export const hostGuidelinesUrl = 'https://www.couchconcerts.com/host-guidelines';

/** legal urls */
export const privacyPolicyUrl = 'https://www.couchconcerts.com/privacy';
export const termsUrl = 'https://www.couchconcerts.com/terms';

/** TOAST TITLES & DESCRIPTIONS */
export const SOMETHING_WENT_WRONG = 'Something went wrong';
export const TRY_AGAIN = 'Please try again!';
