import {Tabs} from 'expo-router';
import React from 'react';
import {ArtistProfileIcon, GuestProfileIcon, HostProfileIcon, ScoutIcon, SearchIcon} from "../../globals/icons";
import {View} from "react-native";
import HeaderTitle from "../../components/HeaderTitle";

const searchTitle = 'Search';
const scoutTitle = 'Scout';
const guestProfileTitle = 'Guest';
const artistProfileTitle = 'Artist';
const hostProfileTitle = 'Host';

function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarBackground: () => <View className={'flex-1 bg-primary'}/>,
            tabBarActiveTintColor: '#FF7B00',
            tabBarInactiveTintColor: 'white',
            headerBackground: () => <View className={'flex-1 bg-primary'}/>,
            // headerShown: false,
        }}>
            {/** search */}
            <Tabs.Screen
                name='explore'
                options={{
                    title: searchTitle,
                    headerTitle: (props) => <HeaderTitle {...props} title={searchTitle}/>,
                    tabBarIcon: ({color, focused}) => (
                        <SearchIcon color={color}/>
                    ),
                }}
            />

            {/** scout */}
            <Tabs.Screen
                name='scout'
                options={{
                    title: scoutTitle,
                    headerTitle: (props) => <HeaderTitle {...props} title={scoutTitle}/>,
                    tabBarIcon: ({color, focused}) => (
                        <ScoutIcon color={color}/>
                    ),
                }}
            />

            {/** guest */}
            <Tabs.Screen
                name='index'
                options={{
                    title: guestProfileTitle,
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <GuestProfileIcon color={color}/>
                    ),
                }}
            />

            {/** artists */}
            <Tabs.Screen
                name='artist'
                options={{
                    title: artistProfileTitle,
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <ArtistProfileIcon color={color}/>
                    ),
                }}
            />

            {/** hosts */}
            <Tabs.Screen
                name='host'
                options={{
                    title: hostProfileTitle,
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <HostProfileIcon color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;
