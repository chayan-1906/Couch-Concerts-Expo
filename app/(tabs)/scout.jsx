import {FlatList, RefreshControl, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";
import {DoubleRightArrowIcon} from "../../globals/icons";
import Colors from "../../constants/Colors";
import {useEffect} from "react";
import DiscoverCard from "../../components/discover/DiscoverCard";
import isListEmpty from "../../globals/functions/isListEmpty";

function ScoutTab() {
    let {discover_loading, discover_response, discover_error, discoverApi} = useCouchConcertsContext();
    let {events, hostWanted, venuesNearMe, artistsTrending} = discover_response || {};

    /** call discoverApi */
    useEffect(() => {
        discoverApi();
    }, []);

    /** loader */
    if (discover_loading) {
        return (<View className={'flex flex-1 justify-center items-center bg-primary'}>
            <Text className={'text-primary-foreground text-3xl font-mMedium'}>Loading...</Text>
        </View>);
    }

    return (
        <View className={'flex flex-1 bg-primary'}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}} className={'space-y-5'}
                        refreshControl={<RefreshControl refreshing={discover_loading} onRefresh={discoverApi}/>}>
                {/** artists trending */}
                {
                    !isListEmpty(artistsTrending) && (
                        <View className={'space-y-2'}>
                            <View className={'flex flex-row justify-between items-center px-4'}>
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
                                contentContainerStyle={{gap: 16, paddingHorizontal: 16}}
                            />
                        </View>
                    )
                }

                {/** events */}
                {/** events near me */}
                {
                    events?.map((eventObj) => {
                        return (
                            <View className={'space-y-2'}>
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
                                    key={eventObj.title}
                                    data={eventObj.eventList}
                                    renderItem={({item, index}) => <DiscoverCard event={item}/>}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{gap: 16, paddingHorizontal: 16}}
                                />
                            </View>
                        );
                    })
                }

                {/** host requests */}
                {
                    !isListEmpty(hostWanted) && (
                        <View className={'space-y-2'}>
                            <View className={'flex flex-row justify-between items-center px-4'}>
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
                                contentContainerStyle={{gap: 16, paddingHorizontal: 16}}
                            />
                        </View>
                    )
                }

                {/** venues near me */}
                {
                    !isListEmpty(venuesNearMe) && (
                        <View className={'space-y-2'}>
                            <View className={'flex flex-row justify-between items-center px-4'}>
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
                                contentContainerStyle={{gap: 16, paddingHorizontal: 16}}
                            />
                        </View>
                    )
                }
            </ScrollView>

        </View>
    );
}

export default ScoutTab;
