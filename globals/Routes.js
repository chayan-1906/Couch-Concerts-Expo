/** auth routes */
export const loginPath = (phoneNumber) => {
    let url = '/(auth)/login';
    if (phoneNumber) url = url + `?phoneNumber=${phoneNumber}`;
    return url;
};

export const verifyPath = (phoneNumber) => `/(auth)/verify/${phoneNumber}`;

export const registerPath = (phoneNumber) => `/(auth)/register/${phoneNumber}`;

/** tab routes */
export const discoverPath = '/(tabs)/discover';

export const scoutPath = '/(tabs)/scout';

export const guestProfilePath = '/(tabs)/(profile)/(guest)';

export const artistsProfilePath = '/(tabs)/(profile)/(artist)';

export const hostsProfilePath = '/(tabs)/(profile)/(host)';

export const guestCreateEventPath = `${guestProfilePath}/create-event`;

export const hostCreateEventPath = `${hostsProfilePath}/create-event`;

/** modals */
export const countryPickerPath = '/(modals)/country-picker';

export const artistPickerPath = '/(modals)/events/artist-picker';
