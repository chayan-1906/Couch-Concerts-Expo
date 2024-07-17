import {SafeAreaView} from "react-native-safe-area-context";
import {ActivityIndicator, Platform, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import Colors from "../../constants/Colors";

function Modal({children, isLoading}) {
    let router = useRouter();

    return (
        <SafeAreaView className={`flex flex-1 w-full h-full items-center bg-primary opacity-95 ${Platform.OS === 'android' ? 'pt-3' : 'pt-0'}`}>
            {
                isLoading ? (
                    <View className={'flex h-full items-center justify-center'}>
                        <ActivityIndicator color={Colors.gray["100"]}/>
                    </View>
                ) : [children]
            }

            {/** close button for modal */}
            <TouchableOpacity className={`absolute ${Platform.OS === 'ios' ? 'top-5' : 'top-12'} right-5 h-10 w-10 items-center justify-center bg-white rounded-full`} onPress={() => router.back()}>
                <AntDesign name='close' size={24} color='black'/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Modal;
