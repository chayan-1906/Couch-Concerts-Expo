import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useRef} from 'react';
import 'react-native-reanimated';
import {CouchConcertsProvider} from "../contexts/CouchConcertsContext";
import {StatusBar} from "expo-status-bar";
import Toast from "react-native-toast-message";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    });

    const toastRef = useRef(null);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <CouchConcertsProvider>
            <Stack>
                <Stack.Screen name='index' options={{headerShown: false}}/>
                <Stack.Screen name='(auth)' options={{headerShown: false}}/>
                <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
                <Stack.Screen name='+not-found' options={{headerShown: false}}/>
            </Stack>
            <StatusBar backgroundColor={'black'} style={'auto'}/>
            <Toast/>
        </CouchConcertsProvider>
    );
}

export default RootLayout;
