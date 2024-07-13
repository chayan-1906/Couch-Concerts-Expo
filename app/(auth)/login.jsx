import {SafeAreaView} from "react-native-safe-area-context";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {scoutPath, verifyPath} from "../../globals/Routes";
import PhoneNumberInput from "../../components/inputs/PhoneNumberInput";
import {useState} from "react";
import {ArrowRightIcon} from "../../globals/icons";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";

function LoginPage() {
    let router = useRouter();
    const [phone, setPhone] = useState('');
    const [formattedNumber, setFormattedNumber] = useState('');
    const [isValid, setIsValid] = useState(false);

    let {send_otp_loading, send_otp_success, send_otp_error, sendOtpApi} = useCouchConcertsContext();

    function handleClick() {
        sendOtpApi(formattedNumber);
        router.replace(verifyPath);
    }

    return (
        <SafeAreaView className={'flex flex-1 bg-primary gap-10'}>
            <ScrollView className={'pt-10'} showsVerticalScrollIndicator={false} horizontal={false}
                        contentContainerStyle={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, gap: 16}}>
                {/** app logo */}
                <View className={'p-3'}>
                    <Image source={require('../../assets/images/logo_with_tag.png')} resizeMode={'contain'} className={'w-48 h-52'}/>
                </View>

                {/** card-content */}
                <View className={'flex flex-col w-full items-center bg-secondary rounded-xl p-5 space-y-3'}>
                    <Text className={'text-primary-foreground text-xl font-mSemiBold mb-4'}>Verify your phone number</Text>
                    <PhoneNumberInput value={phone} setValue={setPhone} formattedValue={formattedNumber} setFormattedValue={setFormattedNumber} isValid={isValid} setIsValid={setIsValid}/>
                    <TouchableOpacity className={`flex flex-row w-full justify-center ${isValid ? 'bg-primary' : 'bg-gray-100'} rounded-lg py-3`} disabled={!isValid} onPress={handleClick}>
                        <Text className={'text-base text-primary-foreground font-mBold'}>Send Code</Text>
                        <ArrowRightIcon color={'white'} size={20}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity className={'flex flex-row p-3 w-full justify-center items-center'} onPress={() => router.replace(scoutPath)}>
                    <Text className={'text-primary-foreground font-mSemiBold'}>Continue without logging in</Text>
                    <ArrowRightIcon color={'white'} size={20}/>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LoginPage;
