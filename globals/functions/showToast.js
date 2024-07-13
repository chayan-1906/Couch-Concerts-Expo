import Toast from "react-native-toast-message";

export function showSuccessToast({title, description}) {
    Toast.show({
        type: 'success',
        position: 'bottom',
        text1: title,
        text2: description,
        visibilityTime: 3000,
        autoHide: true,
        text1Style: {fontFamily: 'Montserrat-SemiBold'},
        text2Style: {fontFamily: 'Montserrat-Regular'},
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => {
        },
        onHide: () => {
        },
        onPress: () => {
        },
    });
}

export function showErrorToast({title, description}) {
    Toast.show({
        type: 'error',
        position: 'bottom',
        text1: title,
        text2: description,
        visibilityTime: 3000,
        autoHide: true,
        text1Style: {fontFamily: 'Montserrat-SemiBold'},
        text2Style: {fontFamily: 'Montserrat-Regular'},
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => {
        },
        onHide: () => {
        },
        onPress: () => {
        },
    });
}

export function showInfoToast({title, description}) {
    Toast.show({
        type: 'info',
        position: 'bottom',
        text1: title,
        text2: description,
        visibilityTime: 3000,
        autoHide: true,
        text1Style: {fontFamily: 'Montserrat-SemiBold'},
        text2Style: {fontFamily: 'Montserrat-Regular'},
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => {
        },
        onHide: () => {
        },
        onPress: () => {
        },
    });
}
