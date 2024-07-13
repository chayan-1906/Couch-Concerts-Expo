import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import {useCouchConcertsContext} from "../contexts/CouchConcertsContext";
import {Redirect} from "expo-router";
import {loginPath} from "../globals/Routes";

function Splash() {
    let {isLoggedIn} = useCouchConcertsContext();

    if (isLoggedIn === false) return <Redirect href={loginPath}/>

    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Splash Screen</Text>
        </SafeAreaView>
    );
}

export default Splash;
