import {Image, Text, TouchableOpacity, View} from "react-native";
import getSignedUrl from "../../globals/functions/getSignedUrl";
import generateAddress from "../../globals/functions/generateAddress";
import getInitialLetter from "../../globals/functions/getInitialLetter";

function DiscoverCard({artist, event, venueRequest, host}) {
    let imageUrl;
    let title;
    let subtitle;

    if (artist) {
        imageUrl = getSignedUrl(artist.image);
        title = artist.name;
        subtitle = generateAddress({artist});
    } else if (event) {
        imageUrl = getSignedUrl(event.artist.image);
        title = event.artist.name;
        subtitle = generateAddress({event});
    } else if (venueRequest) {
        imageUrl = getSignedUrl(venueRequest.image);
        title = venueRequest.artistName;
        subtitle = venueRequest.displayAddress;
    } else if (host) {
        imageUrl = getSignedUrl(host.image);
        title = host.name;
        subtitle = generateAddress({venue: host});
    }

    return (
        <TouchableOpacity className={'flex flex-1 space-y-2 rounded-xl'}>
            {/** image */}
            {imageUrl ? (
                <Image source={{uri: imageUrl}} className={'h-40 w-40 rounded-xl'}/>
            ) : (
                <View className={'flex h-40 w-40 items-center justify-center rounded-xl bg-secondary'}>
                    <Text className={'text-8xl text-primary-foreground font-mBold'}>{getInitialLetter(title)}</Text>
                </View>
            )}

            <View className={'flex'}>
                {/** title */}
                <Text className={'text-lg text-primary-foreground font-mSemiBold'}>{title}</Text>

                {/** subtitle */}
                <Text className={'text-primary-foreground font-mRegular'}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DiscoverCard;
