/** auth routes */
export const loginPath = (phoneNumber) => {
    let url = '/(auth)/login';
    if (phoneNumber) url = url + `?phoneNumber=${phoneNumber}`;
    return url;
};

export const verifyPath = (phoneNumber) => `/(auth)/verify/${phoneNumber}`;

export const registerPath = '/(auth)/register';

export const countryPickerPath = '/(modals)/country-picker';

/** tab routes */
export const discoverPath = '/(tabs)/discover';

export const scoutPath = '/(tabs)/scout';

export const guestProfilePath = '/(tabs)';

export const artistsProfilePath = '/(tabs)/artists';

export const hostsProfilePath = '/(tabs)/hosts';
