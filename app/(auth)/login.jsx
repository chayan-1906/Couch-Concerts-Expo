import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import {scoutPath, verifyPath} from "../../globals/Routes";
import PhoneNumberInput from "../../components/inputs/PhoneNumberInput";
import {useEffect, useState} from "react";
import {ArrowRightIcon} from "../../globals/icons";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";
import isStringInvalid from "../../globals/functions/isStringInvalid";
import {formatPhoneNumberAsYouType} from "../../globals/functions/validatePhone";

function LoginPage() {
    let router = useRouter();
    let {phoneNumber} = useLocalSearchParams();
    const [phone, setPhone] = useState(phoneNumber);
    const [isValid, setIsValid] = useState(formatPhoneNumberAsYouType(phoneNumber));

    let {formattedNumber, setFormattedNumber, selectedArea, send_otp_loading, send_otp_success, send_otp_error, sendOtpApi} = useCouchConcertsContext();

    function handleClick() {
        sendOtpApi(`${selectedArea?.callingCode}${phone}`);
        router.replace(verifyPath(`${selectedArea?.callingCode}${phone}`));
    }

    useEffect(() => {
        if (isValid) Keyboard.dismiss();
    }, [isValid]);

    return (
        <SafeAreaView className={'flex flex-1 bg-primary gap-10'}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={-35}>
                <ScrollView className={'pt-10'} showsVerticalScrollIndicator={false} horizontal={false}
                            contentContainerStyle={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, gap: 16}}>
                    {/** app logo */}
                    <View className={'p-3'}>
                        <Image source={require('../../assets/images/logo_with_tag.png')} resizeMode={'contain'} className={'w-48 h-52'}/>
                    </View>

                    {/** card-content */}
                    <View className={'flex flex-col w-full items-center bg-secondary rounded-xl p-5 space-y-3'}>
                        <Text className={'text-primary-foreground text-xl font-mSemiBold mb-4'}>Verify your phone number</Text>

                        <View>
                            <PhoneNumberInput value={phone} setValue={setPhone} formattedValue={formattedNumber} setFormattedValue={setFormattedNumber} isValid={isValid} setIsValid={setIsValid}/>
                            {!isStringInvalid(phone) && !isValid && (<Text className={'text-primary font-mMedium text-start'}>Invalid Phone</Text>)}
                        </View>

                        <TouchableOpacity className={`flex flex-row w-full justify-center ${isValid ? 'bg-primary' : 'bg-gray-100'} rounded-lg py-3`} disabled={!isValid} onPress={handleClick}>
                            <Text className={'text-base text-primary-foreground font-mBold mr-2'}>Send Code</Text>
                            <ArrowRightIcon color={'white'} size={20}/>
                        </TouchableOpacity>
                    </View>

                    {/** continue without logging in */}
                    <TouchableOpacity className={'flex flex-row p-3 w-full justify-center items-center'} onPress={() => router.replace(scoutPath)}>
                        <Text className={'text-primary-foreground font-mSemiBold mr-2'}>Continue without logging in</Text>
                        <ArrowRightIcon color={'white'} size={20}/>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default LoginPage;
