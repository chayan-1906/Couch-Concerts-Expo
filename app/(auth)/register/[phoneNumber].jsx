import {Button, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

function RegisterPage() {
    let {phoneNumber} = useLocalSearchParams();

    // printInConsole(phoneNumber);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={styles.inner}>
                        <View className={'flex bg-secondary justify-center items-center h-72'}>
                            <Text className={'text-3xl font-mBold'}>Sample BgColor</Text>
                        </View>
                        <Text style={styles.header}>Header</Text>
                        <TextInput placeholder="Username" style={styles.textInput}/>
                        <View style={styles.btnContainer}><Button title="Submit" onPress={() => null}/></View>
                        <View style={styles.btnContainer}><Button title="Submit" onPress={() => null}/></View>
                        <View style={styles.btnContainer}><Button title="Submit" onPress={() => null}/></View>
                        <View style={styles.btnContainer}><Button title="Submit" onPress={() => null}/></View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default RegisterPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});
