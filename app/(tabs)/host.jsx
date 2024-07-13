import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";

function Host() {
    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Hosts</Text>
        </SafeAreaView>
    );
}

export default Host;
