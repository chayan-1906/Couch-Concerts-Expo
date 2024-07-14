import parsePhoneNumberFromString, {AsYouType} from "libphonenumber-js";

export function validatePhone(phoneNumber, defaultCountry) {
    try {
        const phoneNumberObject = parsePhoneNumberFromString(phoneNumber, defaultCountry);
        return phoneNumberObject?.isValid() || false;
    } catch (error) {
        return false;
    }
}

export function formatPhoneNumberAsYouType(phoneNumber, defaultCountry) {
    const asYouType = new AsYouType(defaultCountry);
    return asYouType.input(phoneNumber);
}
