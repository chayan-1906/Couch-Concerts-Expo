import {kGoogleApiKey} from './GlobalsAndConstants.jsx'

export const refreshBrowser = (reload = false) => {
    window.location.reload(reload)
}

export const getIsLoggedIn = (currentUser) => {
    if (currentUser) return !!(currentUser.authToken && currentUser.personId);
    else return false;
}

export const formatTime = (obj) => {
    /*const inputDateString = event.startTime
    const inputDate = new Date(inputDateString)
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
    }
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(inputDate)*/
    return obj.stringDateTime;
}

export const matchIsNumeric = (text) => {
    // return typeof text === 'number'
    return !isNaN(text)
}

export const mapDirectionUrl = (latitude, longitude) => {
    return `https://www.google.com/maps/dir/${latitude},${longitude}`;
}

export const getCurrentLocationLatLng = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            printInConsole("Geolocation not supported");
            reject(new Error("Geolocation not supported"));
        }

        async function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const latlng = {
                latitude: latitude,
                longitude: longitude,
            };
            // printInConsole(`Latitude: ${latlng.latitude}, Longitude: ${latlng.longitude}`);
            storeInLocalStorage('currentCoordinates', JSON.stringify(latlng));

            try {
                const address = await getAddressFromLatLng(latitude, longitude);
                // const address = await getAddressFromLatLng(30.602580, -97.806370);
                resolve({latlng, address});
            } catch (error) {
                printInConsole(`error inside catch - ${error}`);
                // reject(error);
            }
        }

        function error() {
            printInConsole("Unable to retrieve your location");
            // reject(new Error("Unable to retrieve your location"));
        }
    });
}

export async function getAddressFromLatLng(latitude, longitude) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${kGoogleApiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'OK' && data.results.length > 0) {
            let street = '', city = '', district = '', state = '', country = '', postal_code = '';
            for (let index in data.results[0].address_components) {
                let component = data.results[0].address_components[index];
                /* street */
                if (component.types.includes('street_number')) {
                    street = `${component.long_name} `;
                } else if (component.types.includes('plus_code')) {
                    street = `${component.long_name}, `;
                }

                if (component.types.includes('route')) {
                    street += component.long_name;   // 119, omrahaganj
                }

                /* city */
                if (component.types.includes('sublocality')) {
                    city = component.long_name; // Lalbagh
                }

                /* district */
                if (component.types.includes('locality')) {
                    district = component.long_name; // Murshidabad
                }

                /* state */
                if (component.types.includes('administrative_area_level_1')) {
                    state = component.long_name;    // West Bengal
                }

                /* country */
                if (component.types.includes('country')) {
                    country = component.long_name;    // India
                }

                /* postal code */
                if (component.types.includes('postal_code')) {
                    postal_code = component.long_name;    // 742149
                }
            }

            let address = {
                street: street,
                city: city || district,
                state: state,
                country: country,
                postal_code: postal_code,
                displayAddress: data.results[0].formatted_address,
            };
            printInConsole(`address: ${JSON.stringify(address)}`);
            storeInLocalStorage('currentAddress', JSON.stringify(address));
            return address;
        } else {
            console.error('No address found for the provided coordinates');
            return null;
        }
    } catch (error) {
        console.error('Error fetching address:', error);
        return null;
    }
}
