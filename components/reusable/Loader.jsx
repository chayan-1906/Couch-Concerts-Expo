import {ActivityIndicator, Text, View} from "react-native";
import Colors from "../../constants/Colors";

function Loader() {
    return (
        <View className={'flex flex-col space-y-3 flex-1 justify-center items-center bg-primary'}>
            <ActivityIndicator color={Colors.gray['100']}/>
            <Text className={'font-mMedium text-lg text-gray-100'}>Loading...</Text>
        </View>
    )
}

export default Loader;
