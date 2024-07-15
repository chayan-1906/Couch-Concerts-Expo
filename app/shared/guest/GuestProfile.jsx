import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {MaterialIcons} from "@expo/vector-icons";
import {useCouchConcertsContext} from "../../../contexts/CouchConcertsContext";
import {useRouter} from "expo-router";
import {loginPath} from "../../../globals/Routes";

function GuestProfile() {
    let {logout} = useCouchConcertsContext();
    let router = useRouter();

    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary space-y-20'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Guest Profile</Text>

            <TouchableOpacity onPress={() => {
                logout();
                router.replace(loginPath());
            }}>
                <MaterialIcons name="logout" size={24} color="white"/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default GuestProfile;
