import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import {useCouchConcertsContext} from "../contexts/CouchConcertsContext";
import {useRouter} from "expo-router";
import {guestProfilePath, loginPath} from "../globals/Routes";
import {useEffect} from "react";

function Splash() {
    let {isLoggedIn} = useCouchConcertsContext();
    let router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            setTimeout(() => router.replace(guestProfilePath), 2000);
        } else if (isLoggedIn === false) {
            setTimeout(() => router.replace(loginPath()), 2000);
        }
    }, [isLoggedIn]);

    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Splash Screen</Text>
        </SafeAreaView>
    );
}

export default Splash;
