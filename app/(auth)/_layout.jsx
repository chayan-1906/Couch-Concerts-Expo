import {Stack} from "expo-router";

function AuthLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen name={'login'} options={{headerShown: false}}/>
                <Stack.Screen name={'verify'} options={{headerShown: false}}/>
                <Stack.Screen name={'register'} options={{headerShown: false}}/>
            </Stack>
        </>
    );
}

export default AuthLayout;
