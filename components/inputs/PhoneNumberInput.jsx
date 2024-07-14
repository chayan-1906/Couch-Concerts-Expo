import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {countryPickerPath} from "../../globals/Routes";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";
import {validatePhone} from "../../globals/functions/validatePhone";

function PhoneNumberInput({value, setValue, formattedValue, setFormattedValue, isValid = false, setIsValid}) {
    let router = useRouter();
    let {selectedArea, setSelectedArea} = useCouchConcertsContext();

    const handleChangeText = (text) => {
        // setValue(text);
        setIsValid(validatePhone(text, selectedArea?.code));
    };

    return (
        <View className={'flex flex-col'}>
            <View className={'flex flex-row border-gray-100 border h-12 items-center rounded-lg p-2 mb-2 w-72 space-x-3'}>
                <TouchableOpacity className={'flex flex-row w-22 h-12'} onPress={() => router.push(countryPickerPath)}>
                    <View className={'flex flex-row justify-center items-center space-x-1'}>
                        <Image source={{uri: selectedArea?.flag}} className={'h-10 w-10'}/>
                        <Text className={''}>{selectedArea?.callingCode}</Text>
                    </View>
                </TouchableOpacity>

                <TextInput
                    className={'flex-1 h-10 font-mMedium'}
                    // value={value}
                    placeholder={'Enter your phone number...'}
                    selectionColor={'black'}
                    keyboardType={'number-pad'}
                    onChangeText={handleChangeText}
                />
            </View>
            {/*{renderAreasCodeModal()}*/}
            {!isValid && (<Text className={'text-primary font-mMedium text-start'}>Invalid Phone</Text>)}
        </View>
    );
}

export default PhoneNumberInput;
