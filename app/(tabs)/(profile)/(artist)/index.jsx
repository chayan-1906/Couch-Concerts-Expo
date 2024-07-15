import {SafeAreaView} from "react-native-safe-area-context";
import {Image, Text, View} from "react-native";

function ArtistProfile() {
    return (
        <SafeAreaView className={'flex flex-1 justify-center items-center bg-primary'}>
            <View className={'flex-1 w-full h-full absolute inset-0'}>
                <Image source={{uri: 'https://wallpapers.com/images/featured/random-razywjghzt72bz8i.jpg'}} blurRadius={20} className="h-full blur-3xl filter" alt="Your image alt text"/>
            </View>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Artist Profile</Text>
        </SafeAreaView>
    );
}

export default ArtistProfile;
