import {FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";
import {DoubleRightArrowIcon} from "../../globals/icons";
import Colors from "../../constants/Colors";
import {useEffect} from "react";
import DiscoverCard from "../../components/discover/DiscoverCard";
import isListEmpty from "../../globals/functions/isListEmpty";
import Loader from "../../components/reusable/Loader";

function ScoutTab() {
    let {discover_loading, discover_response, discover_error, discoverApi} = useCouchConcertsContext();
    let {events, hostWanted, venuesNearMe, artistsTrending} = discover_response || {};

    /** call discoverApi */
    useEffect(() => {
        discoverApi();
    }, []);

    /** loader */
    if (discover_loading) {
        return (
            <Loader/>
        );
    }

    return (
        <View className={'flex flex-1 bg-primary'}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 16}} className={'space-y-5'}
                        refreshControl={<RefreshControl refreshing={discover_loading} onRefresh={discoverApi}/>}>
                {/** artists trending */}
                {
                    !isListEmpty(artistsTrending) && (
                        <View className={'space-y-2'}>
                            <View className={'flex flex-row justify-between items-center px-5'}>
                                {/** category title */}
                                <Text className={'text-2xl text-primary-foreground font-mSemiBold'}>Artists Trending</Text>

                                {/** view all */}
                                <TouchableOpacity className={'flex flex-row'}>
                                    <Text className={'text-lg text-secondary font-mMedium'}>View All</Text>
                                    <DoubleRightArrowIcon color={Colors.secondary.DEFAULT}/>
                                </TouchableOpacity>
                            </View>

                            {/** artist trending list */}
                            <FlatList
                                data={artistsTrending}
                                renderItem={({item, index}) => <DiscoverCard artist={item}/>}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{gap: 16, paddingHorizontal: 20}}
                            />
                        </View>
                    )
                }

                {/** events near me */}
                {
                    events?.map((eventObj) => {
                        return (
                            <View className={'space-y-2'} key={eventObj.title}>
                                <View className={'flex flex-row justify-between items-center px-4'}>
                                    {/** category title */}
                                    <Text className={'text-2xl text-primary-foreground font-mSemiBold'}>{eventObj.title}</Text>

                                    {/** view all */}
                                    <TouchableOpacity className={'flex flex-row'}>
                                        <Text className={'text-lg text-secondary font-mMedium'}>View All</Text>
                                        <DoubleRightArrowIcon color={Colors.secondary.DEFAULT}/>
                                    </TouchableOpacity>
                                </View>

                                <FlatList
                                    data={eventObj.eventList}
                                    renderItem={({item, index}) => <DiscoverCard event={item}/>}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{gap: 16, paddingHorizontal: 20}}
                                />
                            </View>
                        );
                    })
                }

                {/** host requests */}
                {
                    !isListEmpty(hostWanted) && (
                        <View className={'space-y-2'}>
                            <View className={'flex flex-row justify-between items-center px-5'}>
                                {/** category title */}
                                <Text className={'text-2xl text-primary-foreground font-mSemiBold'}>Hosts Requests</Text>

                                {/** view all */}
                                <TouchableOpacity className={'flex flex-row'}>
                                    <Text className={'text-lg text-secondary font-mMedium'}>View All</Text>
                                    <DoubleRightArrowIcon color={Colors.secondary.DEFAULT}/>
                                </TouchableOpacity>
                            </View>

                            {/** host requests list */}
                            <FlatList
                                data={hostWanted}
                                renderItem={({item, index}) => <DiscoverCard venueRequest={item}/>}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{gap: 16, paddingHorizontal: 20}}
                            />
                        </View>
                    )
                }

                {/** venues near me */}
                {
                    !isListEmpty(venuesNearMe) && (
                        <View className={'space-y-2'}>
                            <View className={'flex flex-row justify-between items-center px-5'}>
                                {/** category title */}
                                <Text className={'text-2xl text-primary-foreground font-mSemiBold'}>Hosts Near Me</Text>

                                {/** view all */}
                                <TouchableOpacity className={'flex flex-row'}>
                                    <Text className={'text-lg text-secondary font-mMedium'}>View All</Text>
                                    <DoubleRightArrowIcon color={Colors.secondary.DEFAULT}/>
                                </TouchableOpacity>
                            </View>

                            {/** venues near me list */}
                            <FlatList
                                data={venuesNearMe}
                                renderItem={({item, index}) => <DiscoverCard host={item}/>}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{gap: 16, paddingHorizontal: 20}}
                            />
                        </View>
                    )
                }
            </ScrollView>

        </View>
    );
}

export default ScoutTab;
