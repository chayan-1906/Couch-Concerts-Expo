import {Stack} from "expo-router";

function ModalsLayout() {
    return (
        <Stack>
            <Stack.Screen name={'country-picker'} options={{headerShown: false, presentation: 'modal'}}/>
            <Stack.Screen name={'events/artist-picker'} options={{headerShown: false, presentation: 'modal'}}/>
        </Stack>
    );
}

export default ModalsLayout;
