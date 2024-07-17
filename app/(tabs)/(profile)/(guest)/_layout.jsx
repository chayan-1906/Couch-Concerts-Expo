import {Stack} from "expo-router";
import Colors from "../../../../constants/Colors";
import HeaderTitle from "../../../../components/reusable/HeaderTitle";
import React from "react";
import {Platform, View} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";
import Back from "../../../../components/reusable/Back";

function GuestLayout() {
    return (
        <Stack>
            <Stack.Screen name={'index'} options={{headerShown: false}}/>
            <Stack.Screen name={'create-event'} options={{
                // headerTitle: 'Request Show',
                headerTitle: (props) => <HeaderTitle {...props} title={'Request Show'}/>,
                headerStyle: {backgroundColor: Colors.primary},
                headerLeft: () => Platform.OS === 'ios' && <Back/>,
                headerBackVisible: false,
            }}/>
        </Stack>
    );
}

export default GuestLayout;
