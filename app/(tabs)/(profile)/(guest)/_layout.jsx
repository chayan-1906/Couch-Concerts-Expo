import {Stack} from "expo-router";

function GuestLayout() {
    return (
        <Stack>
            <Stack.Screen name={'index'} options={{headerShown: false}}/>
        </Stack>
    );
}

export default GuestLayout;
