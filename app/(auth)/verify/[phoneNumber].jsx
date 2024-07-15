import {SafeAreaView} from "react-native-safe-area-context";
import {ActivityIndicator, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import {ArrowRightIcon} from "../../../globals/icons";
import {useEffect, useState} from "react";
import {useCouchConcertsContext} from "../../../contexts/CouchConcertsContext";
import OTPInput from "../../../components/inputs/OTPInput";
import Colors from "../../../constants/Colors";
import {Entypo} from "@expo/vector-icons";
import {loginPath} from "../../../globals/Routes";

function VerifyPage() {
    let router = useRouter();
    let {phoneNumber} = useLocalSearchParams();
    const [otp, setOtp] = useState('');
    const [isValid, setIsValid] = useState(false);

    let {formattedNumber, setFormattedNumber, verify_otp_loading, verify_otp_error, verify_otp_response, person, verifyOtpApi, sendOtpApi} = useCouchConcertsContext();

    function verifyOtp() {
        verifyOtpApi(phoneNumber, otp);
    }

    useEffect(() => {
        if (isValid) {
            verifyOtp();
        }
    }, [isValid]);

    return (
        <SafeAreaView className={'flex flex-1 bg-primary gap-10'}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={-35}>
                <ScrollView className={'pt-10'} showsVerticalScrollIndicator={false} horizontal={false}
                            contentContainerStyle={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, gap: 16}}>
                    {/** app logo */}
                    <View className={'p-3'}>
                        <Image source={require('../../../assets/images/logo_with_tag.png')} resizeMode={'contain'} className={'w-48 h-52'}/>
                    </View>

                    {/** card-content */}
                    <View className={'flex flex-col w-full items-center bg-secondary rounded-xl p-5 space-y-3'}>
                        <Text className={'text-primary-foreground text-xl font-mSemiBold mb-4 text-center'}>Enter the code you received to {'\n'} {formattedNumber}</Text>

                        {/** otp input */}
                        <OTPInput otp={otp} setOtp={setOtp} isValid={isValid} setIsValid={setIsValid}/>

                        {/** verify button */}
                        <TouchableOpacity className={`flex flex-row w-full justify-center ${(verify_otp_loading || !isValid) ? 'bg-gray-100' : 'bg-primary'} rounded-lg py-3`}
                                          disabled={verify_otp_loading || !isValid}
                                          onPress={verifyOtp}>
                            {
                                verify_otp_loading ? (
                                    <ActivityIndicator color={Colors.gray["800"]}/>
                                ) : (
                                    <View className={'flex flex-row'}>
                                        <Text className={'text-base text-primary-foreground font-mBold mr-2'}>Verify</Text>
                                        <ArrowRightIcon color={'white'} size={20}/>
                                    </View>
                                )
                            }
                        </TouchableOpacity>

                        {/** resend button */}
                        <TouchableOpacity className={''} onPress={() => sendOtpApi(phoneNumber)}>
                            <Text className={'font-mSemiBold'}>Resend Code</Text>
                        </TouchableOpacity>

                        {/** change phone number */}
                        <TouchableOpacity className={'flex flex-row items-center self-start'} onPress={() => router.replace(loginPath(phoneNumber.slice(-10)))}>
                            <Entypo name="chevron-left" size={24} color="black"/>
                            <Text className={'font-mSemiBold'}>Change phone number</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default VerifyPage;
