import {Stack} from "expo-router";

function GuestLayout() {
    return (
        <Stack>
            <Stack.Screen name={'(guest)'} options={{headerShown: false}}/>
        </Stack>
    );
}

export default GuestLayout;
