import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity} from "react-native";
import {guestProfilePath} from "../../../globals/Routes";

function RegisterPage() {
    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Register Screen</Text>
            <TouchableOpacity className={'bg-secondary p-3'} onPress={() => router.replace(guestProfilePath)}>
                <Text>Go to TabLayout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default RegisterPage;
