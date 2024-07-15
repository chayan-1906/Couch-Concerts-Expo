import {Stack} from "expo-router";

function ArtistLayout() {
    return (
        <Stack>
            <Stack.Screen name={'index'} options={{headerShown: false}}/>
        </Stack>
    );
}

export default ArtistLayout;
