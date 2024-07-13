import {Text} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

function GuestProfile() {
    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Guest Profile</Text>
        </SafeAreaView>
    );
}

export default GuestProfile;
