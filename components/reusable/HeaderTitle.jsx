import {Platform, Text, View} from "react-native";
import {useRouter} from "expo-router";
import Back from "./Back";
import React from "react";

function HeaderTitle({title, showAndroidBack = true}) {
    let router = useRouter();

    return (
        <View className={`flex flex-row space-x-3`}>
            {/** back icon for android only */}
            {
                Platform.OS === 'android' && showAndroidBack && (
                    /*<TouchableOpacity onPress={() => router.back()} className={''}>
                        <AndroidBackIcon color={Colors.white} size={20}/>
                    </TouchableOpacity>*/
                    <Back/>
                )
            }

            {/** title */}
            <Text className={'text-xl font-mMedium text-primary-foreground'}>{title}</Text>
        </View>
    );
}

export default HeaderTitle;
