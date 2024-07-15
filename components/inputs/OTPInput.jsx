import Colors from "../../constants/Colors";
import {OtpInput} from "react-native-otp-entry";
import {Keyboard} from "react-native";

function OTPInput({otp, setOtp, isValid, setIsValid}) {
    return (
        <OtpInput
            numberOfDigits={6}
            focusColor={Colors.primary}
            onFilled={(text) => {
                setOtp(text);
                if (text.length === 6) setIsValid(true);
                else setIsValid(false);
                Keyboard.dismiss();
            }}
            textInputProps={{accessibilityLabel: 'One-Time Password'}}
            theme={{
                pinCodeContainerStyle: {borderRadius: 8},
                focusedPinCodeContainerStyle: {borderRadius: 12, borderWidth: 2},
                pinCodeTextStyle: {fontFamily: 'Montserrat-Regular'}
            }}
        />
    );
}

export default OTPInput;
