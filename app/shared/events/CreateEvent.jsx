import {Platform, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import {artistPickerPath} from "../../../globals/Routes";
import KeyboardAvoidingScrollView from "../../../components/reusable/KeyboardAvoidingScrollView";
import Colors from "../../../constants/Colors";
import {ChevronDownIcon} from "../../../globals/icons";

function CreateEvent() {
    let router = useRouter();

    return (
        <KeyboardAvoidingScrollView className={'flex flex-1'}>
            <View className={'space-y-2 mt-2'}>
                <Text className={'text-primary-foreground font-mSemiBold'}>Select Artist *</Text>
                <TouchableOpacity onPress={() => router.push(artistPickerPath)} className={'flex flex-row mr-2 px-3 items-center border border-primary-foreground rounded-lg'}>
                    <TextInput
                        className={'flex flex-1 h-12 font-mMedium'}
                        placeholder={'Choose an artist...'}
                        placeholderTextColor={Colors.gray["800"]}
                        onPress={() => router.push(artistPickerPath)}
                        readOnly={Platform.OS === 'ios'}
                        // editable={false}
                    />
                    <ChevronDownIcon color={Colors.gray["800"]}/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingScrollView>
    );
}

export default CreateEvent;
