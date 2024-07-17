import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View} from "react-native";
import {useRouter} from "expo-router";
import {hostCreateEventPath} from "../../../../globals/Routes";
import {CalendarPlusIcon} from "../../../../globals/icons";
import Colors from "../../../../constants/Colors";
import IconButton from "../../../../components/reusable/IconButton";

function HostProfile() {
    let router = useRouter();

    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary space-y-10'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Host Profile</Text>
            <View className={'flex flex-row space-y-4 bg-primary'}>
                <IconButton icon={<CalendarPlusIcon color={Colors.white}/>} text={'Request Show'} onPress={() => router.push(hostCreateEventPath)}/>
            </View>
        </SafeAreaView>
    );
}

export default HostProfile;
