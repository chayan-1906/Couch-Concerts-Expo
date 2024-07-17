import {KeyboardAvoidingView, Platform, ScrollView, View} from "react-native";

function KeyboardAvoidingScrollView({children, classes}) {
    return (
        <KeyboardAvoidingView className={'flex flex-1 bg-primary'} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView showsVerticalScrollIndicator={false} horizontal={false} contentContainerStyle={{gap: 16, paddingHorizontal: 20}}>
                <View className={`mb-4 ${classes}`}>
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingScrollView;
