import {Stack} from "expo-router";

function HostLayout() {
    return (
        <Stack>
            <Stack.Screen name={'index'} options={{headerShown: false}}/>
            <Stack.Screen name={'create-event'} options={{headerShown: false}}/>
        </Stack>
    );
}

export default HostLayout;
