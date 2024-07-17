import {Platform, TouchableOpacity} from "react-native";
import Colors from "../../constants/Colors";
import {useRouter} from "expo-router";
import {FontAwesome6, Ionicons} from "@expo/vector-icons";
import React from "react";

function Back() {
    let router = useRouter();

    return (
        /** back */
        <TouchableOpacity onPress={() => router.back()} className={'mx-1'}>
            {
                Platform.OS === 'ios' ? <FontAwesome6 name='chevron-left' size={20} color={Colors.white}/> : <Ionicons name='arrow-back' size={24} color={Colors.white}/>
            }
        </TouchableOpacity>
    );
}

export default Back;
