import {Stack} from "expo-router";

function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name={'login'} options={{headerShown: false}}/>
            <Stack.Screen name={'verify/[phoneNumber]'} options={{headerShown: false}}/>
            <Stack.Screen name={'register/[phoneNumber]'} options={{headerShown: false}}/>
        </Stack>
    );
}

export default AuthLayout;
