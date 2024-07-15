import {Image, Text, TouchableOpacity, View} from "react-native";
import getSignedUrl from "../../globals/functions/getSignedUrl";
import generateAddress from "../../globals/functions/generateAddress";
import isStringInvalid from "../../globals/functions/isStringInvalid";

function ProfileEventCard({event}) {
    let {eventId, externalId, eventName, image, isUpcoming, smallStringDateTime, isArtist, isVenue, artist, venue, totalInvites, totalAttending} = event;

    return (
        <TouchableOpacity className={'flex flex-row p-3 border border-gray-100 rounded-lg space-x-3'}>
            <Image source={{uri: getSignedUrl(image)}} className={'w-24 h-24 rounded-lg'}/>
            <View className={'flex-1'}>
                <Text className={'text-primary-foreground font-mBold text-xl'}>{artist?.name}</Text>
                <Text className={'text-primary-foreground font-mMedium'}>at {venue?.name}</Text>
                <Text className={'text-primary-foreground font-mMedium'}>{generateAddress({event, invited: true})}</Text>
                <Text className={'text-primary-foreground font-mMedium'}>{smallStringDateTime}</Text>

                {/** invite counts */}
                <View className={'flex flex-row'}>
                    {/** totalInvites */}
                    {
                        !isStringInvalid(totalInvites) && (
                            <Text className={'text-primary-foreground font-mMedium'}>Invited: {totalInvites}</Text>
                        )
                    }
                    {/** • */}
                    {
                        !isStringInvalid(totalInvites) && (
                            <Text className={'text-primary-foreground font-mBold'}> • </Text>
                        )
                    }
                    {/** totalAttending */}
                    {
                        !isStringInvalid(totalInvites) && (
                            <Text className={'text-primary-foreground font-mMedium'}>Attending: {totalAttending}</Text>
                        )
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ProfileEventCard;
