import {View} from "react-native";
import {useCouchConcertsContext} from "../contexts/CouchConcertsContext";
import {useRouter} from "expo-router";
import {useEffect, useRef} from "react";
import LottieView from "lottie-react-native";
import {guestProfilePath, loginPath} from "../globals/Routes";

function Splash() {
    let {isLoggedIn} = useCouchConcertsContext();
    let router = useRouter();

    const animation = useRef(null);

    useEffect(() => {
        if (isLoggedIn) {
            setTimeout(() => router.replace(guestProfilePath), 3000);
        } else if (isLoggedIn === false) {
            setTimeout(() => router.replace(loginPath()), 3000);
        }
    }, [isLoggedIn]);

    return (
        <View className={'flex flex-1 bg-primary'}>
            <LottieView
                autoPlay
                loop
                speed={1.3}
                ref={animation}
                style={{
                    // width: 350,
                    height: '100%',
                }}
                source={require('../assets/jsons/lottie.json')}
            />
        </View>
    );
}

export default Splash;
