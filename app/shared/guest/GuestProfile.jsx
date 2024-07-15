import {Image, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {useCouchConcertsContext} from "../../../contexts/CouchConcertsContext";
import {useRouter} from "expo-router";
import {loginPath} from "../../../globals/Routes";
import ParallaxScrollView from "../../../components/ParallaxScrollView";
import getSignedUrl from "../../../globals/functions/getSignedUrl";

function GuestProfile() {
    let {logout, person} = useCouchConcertsContext();
    let router = useRouter();

    let {image} = person || {};

    return (
        <ParallaxScrollView headerImage={<Image source={{uri: getSignedUrl(image)}} resizeMode={'contain'} className={'w-40 h-40 rounded-full'}/>}>

            <Text className={'text-black'}>{person?.personId}</Text>

            <TouchableOpacity onPress={() => {
                logout();
                router.replace(loginPath());
            }}>
                <MaterialIcons name="logout" size={24} color="white"/>
            </TouchableOpacity>
        </ParallaxScrollView>
    );
}

export default GuestProfile;
