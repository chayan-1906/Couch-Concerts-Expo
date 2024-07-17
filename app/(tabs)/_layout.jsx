import {Tabs} from 'expo-router';
import React, {useEffect} from 'react';
import {ArtistProfileIcon, GuestProfileIcon, HostProfileIcon, ScoutIcon, SearchIcon} from "../../globals/icons";
import {View} from "react-native";
import HeaderTitle from "../../components/reusable/HeaderTitle";
import Colors from "../../constants/Colors";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";
import getCurrentUser from "../../globals/functions/getCurrentUser";

const searchTitle = 'Search';
const scoutTitle = 'Scout';
const guestProfileTitle = 'Guest';
const artistProfileTitle = 'Artist';
const hostProfileTitle = 'Host';

function TabsLayout() {
    // TODO: Define myDetailsArtistApi, myDetailsVenueApi
    let {isLoggedIn, myDetailsPersonApi, myDetailsArtistApi, myDetailsVenueApi} = useCouchConcertsContext();

    useEffect(() => {
        async function callMyDetailsApi() {
            let currentUser = await getCurrentUser();

            myDetailsPersonApi({token: currentUser.authToken});
            // call myDetailsArtistApi
            // myDetailsArtistApi();

            // call myDetailsVenueApi
            // myDetailsVenueApi();
        }

        callMyDetailsApi();
    }, []);

    return (
        <Tabs screenOptions={{
            tabBarBackground: () => <View className={'flex-1 bg-primary'}/>,
            tabBarActiveTintColor: Colors.secondary.DEFAULT,
            tabBarInactiveTintColor: 'white',
            headerBackground: () => <View className={'flex-1 bg-primary'}/>,
            // headerShown: false,
        }}>
            {/** search */}
            <Tabs.Screen
                name='explore'
                options={{
                    title: searchTitle,
                    headerTitle: (props) => <HeaderTitle {...props} title={searchTitle} showAndroidBack={false}/>,
                    tabBarIcon: ({color, focused}) => <SearchIcon color={color}/>,
                }}
            />

            {/** scout */}
            <Tabs.Screen
                name='scout'
                options={{
                    title: scoutTitle,
                    headerTitle: (props) => <HeaderTitle {...props} title={scoutTitle} showAndroidBack={false}/>,
                    tabBarIcon: ({color, focused}) => <ScoutIcon color={color}/>,
                }}
            />

            {/** guest */}
            <Tabs.Screen
                name='(profile)/(guest)'
                options={{
                    title: guestProfileTitle,
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => <GuestProfileIcon color={color}/>,
                }}
            />

            {/** artist */}
            <Tabs.Screen
                name='(profile)/(artist)'
                options={{
                    title: artistProfileTitle,
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => <ArtistProfileIcon color={color}/>,
                }}
            />

            {/** host */}
            <Tabs.Screen
                name='(profile)/(host)'
                options={{
                    title: hostProfileTitle,
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => <HostProfileIcon color={color}/>,
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;
