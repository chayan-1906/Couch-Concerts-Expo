import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";
import {verifyPath} from "../../globals/Routes";

function LoginPage() {
    let router = useRouter();

    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary gap-10'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Login Screen</Text>
            <TouchableOpacity className={'bg-destructive p-3'} onPress={() => router.replace(verifyPath)}>
                <Text>Go to Verify</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default LoginPage;
