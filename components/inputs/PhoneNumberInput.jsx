import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {countryPickerPath} from "../../globals/Routes";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";
import {formatPhoneNumberAsYouType, validatePhone} from "../../globals/functions/validatePhone";
import Colors from "../../constants/Colors";

function PhoneNumberInput({value, setValue, formattedValue, setFormattedValue, isValid = false, setIsValid}) {
    let router = useRouter();
    let {selectedArea, setSelectedArea, phoneNumber, setPhoneNumber} = useCouchConcertsContext();

    const handleChangeText = (text) => {
        setValue(text);
        // setPhoneNumber(`${selectedArea?.callingCode}${text}`);
        setFormattedValue(`${selectedArea?.callingCode} ${formatPhoneNumberAsYouType(text, selectedArea?.code)}`);
        setIsValid(validatePhone(text, selectedArea?.code));
    };

    return (
        <View className={'flex flex-col w-full'}>
            <View className={'flex flex-row border-gray-100 border h-12 items-center rounded-lg p-2 mb-2 w-full space-x-3'}>
                <TouchableOpacity className={'flex flex-row w-22 h-12'} onPress={() => router.push(countryPickerPath)}>
                    <View className={'flex flex-row justify-center items-center space-x-1'}>
                        <Image source={{uri: selectedArea?.flag}} className={'h-10 w-10'}/>
                        <Text className={''}>{selectedArea?.callingCode}</Text>
                    </View>
                </TouchableOpacity>

                <TextInput
                    className={'flex-1 h-10 font-mMedium'}
                    defaultValue={value}
                    // value={value}
                    autoFocus
                    placeholder={'Enter your phone number...'}
                    placeholderTextColor={Colors.gray["800"]}
                    keyboardType={'number-pad'}
                    onChangeText={handleChangeText}
                />
            </View>
        </View>
    );
}

export default PhoneNumberInput;
