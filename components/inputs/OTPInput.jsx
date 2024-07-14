import OTPInputView from "@twotalltotems/react-native-otp-input";
import {StyleSheet} from "react-native";

function OTPInput({otp, setOtp, isValid, setIsValid}) {
    return (
        <OTPInputView
            style={{height: 50}}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={styles.border}
            onCodeFilled={(code => {
                if (code.length === 6) {
                    setIsValid(true);
                    setOtp(code);
                } else {
                    setIsValid(false);
                }
            })}
        />
    );
}

export default OTPInput;

const styles = StyleSheet.create({
    border: {
        borderRadius: 6,
    }
});
