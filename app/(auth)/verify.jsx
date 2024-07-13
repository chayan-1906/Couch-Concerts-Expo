import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity} from "react-native";
import {guestProfilePath, registerPath} from "../../globals/Routes";
import {useRouter} from "expo-router";

function VerifyPage() {
    let router = useRouter();

    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary gap-10'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Verify Screen</Text>
            <TouchableOpacity className={'bg-secondary p-3'} onPress={() => router.replace(registerPath)}>
                <Text>Go to Register</Text>
            </TouchableOpacity>
            <TouchableOpacity className={'bg-secondary p-3'} onPress={() => router.replace(guestProfilePath)}>
                <Text>Go to TabLayout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default VerifyPage;
