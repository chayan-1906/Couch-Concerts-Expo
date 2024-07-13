import {useRef} from "react";
import {Text, View} from "react-native";
import PhoneInput from "react-native-phone-number-input";

function PhoneNumberInput({value, setValue, formattedValue, setFormattedValue, isValid = false, setIsValid}) {
    const phoneInputRef = useRef();

    return (
        <View className={'flex flex-col space-y-2'}>
            <PhoneInput
                ref={phoneInputRef}
                defaultValue={value}
                defaultCode='US'
                onChangeText={(text) => {
                    setValue(text);
                    setIsValid(phoneInputRef.current?.isValidNumber(text));
                }}
                onChangeFormattedText={(text) => setFormattedValue(text)}
                autoFocus
                withShadow
                withDarkTheme
                codeTextStyle={{fontFamily: 'Montserrat-Regular'}}
                textInputStyle={{fontFamily: 'Montserrat-Regular'}}
                containerStyle={{borderRadius: 12, width: '100%'}}
                textContainerStyle={{borderTopRightRadius: 12, borderBottomRightRadius: 12}}
            />
            {!isValid && (<Text className={'text-primary font-mMedium text-start'}>Invalid Phone</Text>)}
        </View>
    );
}

export default PhoneNumberInput;
