import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";

function HostProfile() {
    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Host Profile</Text>
        </SafeAreaView>
    );
}

export default HostProfile;