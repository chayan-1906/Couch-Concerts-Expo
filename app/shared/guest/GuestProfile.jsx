import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import {useCouchConcertsContext} from "../../../contexts/CouchConcertsContext";
import {useRouter} from "expo-router";
import {loginPath} from "../../../globals/Routes";
import ParallaxScrollView from "../../../components/reusable/ParallaxScrollView";
import getSignedUrl from "../../../globals/functions/getSignedUrl";
import Loader from "../../../components/reusable/Loader";
import Colors from "../../../constants/Colors";
import capitalize from "../../../globals/functions/capitalize";
import {AwardIcon, CalendarPlusIcon, EditIcon} from "../../../globals/icons";
import IconButton from "../../../components/reusable/IconButton";
import ProfileEventCard from "../../../components/profile/ProfileEventCard";
import isListEmpty from "../../../globals/functions/isListEmpty";
import {useEffect, useState} from "react";

function GuestProfile() {
    let {logout, my_details_person_loading, my_details_person_error, myDetailsPersonApi, person, upcoming_events_list, past_events_list} = useCouchConcertsContext();
    let router = useRouter();

    let {name, image, followingCount, status} = person || {};

    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

    useEffect(() => {
        if (!isListEmpty(upcoming_events_list)) {
            setUpcomingEvents(upcoming_events_list);
        }
        if (!isListEmpty(past_events_list)) {
            setPastEvents(past_events_list);
        }
    }, [person]);

    if (my_details_person_loading) {
        return (
            <Loader/>
        );
    }

    return (
        <ParallaxScrollView
            headerImage={<Image source={{uri: getSignedUrl(image)}} resizeMode={'contain'} className={'w-40 h-40 rounded-full'}/>}
            refreshOnTap={myDetailsPersonApi}
            headerContent={
                <View className={'flex flex-col mt-4 space-y-1 items-center'}>
                    <Text className={'text-primary-foreground text-2xl font-mBold'}>{name}</Text>
                    <Text className={'text-primary-foreground font-mSemiBold'}>Following {followingCount} artists</Text>
                    <View className={'flex flex-row items-center space-x-2'}>
                        <AwardIcon color={Colors.white}/>
                        <Text className={'text-primary-foreground font-mSemiBold'}>Level: {capitalize(status)}</Text>
                    </View>
                </View>
            }
        >
            <View className={'flex flex-col h-full space-y-4 bg-primary'}>
                {/** edit profile & request show buttons */}
                <View className={'flex flex-row w-full justify-between pt-5 px-5'} style={{gap: 16}}>
                    <IconButton icon={<EditIcon color={Colors.white}/>} text={'Edit Profile'} onPress={() => null}/>
                    <IconButton icon={<CalendarPlusIcon color={Colors.white}/>} text={'Request Show'} onPress={() => null}/>
                </View>

                {/** events */}
                <View className={''}>
                    <FlatList
                        data={upcomingEvents}
                        scrollEnabled={false}
                        className={'px-5'}
                        contentContainerStyle={{gap: 16}}
                        renderItem={({item, index}) => (
                            <ProfileEventCard event={item}/>
                        )}
                    />
                </View>

                {/** show more or past events */}
                {
                    !isListEmpty(past_events_list) ? (
                        <View className={''}>
                            <FlatList
                                data={pastEvents}
                                scrollEnabled={false}
                                className={'px-5'}
                                contentContainerStyle={{gap: 16}}
                                renderItem={({item, index}) => (
                                    <ProfileEventCard event={item}/>
                                )}
                            />
                        </View>
                    ) : (
                        <TouchableOpacity className={'flex items-center'} onPress={() => myDetailsPersonApi({pastEvents: true})}>
                            <Text className={'text-primary-foreground font-mSemiBold'}>Show more events...</Text>
                        </TouchableOpacity>
                    )
                }
            </View>

            <TouchableOpacity onPress={() => {
                logout();
                router.replace(loginPath());
            }}>
                <MaterialIcons name="logout" size={24} color={Colors.white}/>
            </TouchableOpacity>
        </ParallaxScrollView>
    );
}

export default GuestProfile;
