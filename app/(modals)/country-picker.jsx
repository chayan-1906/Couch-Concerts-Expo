import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {useRouter} from "expo-router";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";
import {CheckMarkIcon} from "../../globals/icons";
import Colors from "../../constants/Colors";

function CountryPicker() {
    const [areas, setAreas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let router = useRouter();

    let {selectedArea, setSelectedArea} = useCouchConcertsContext();

    useEffect(() => {
        try {
            setIsLoading(true);
            fetch('https://restcountries.com/v2/all')
                .then(response => response.json()
                    .then((data) => {
                        let areaData = data.map((item) => {
                            return {
                                code: item.alpha2Code,
                                item: item.name,
                                callingCode: `+${item.callingCodes[0]}`,
                                flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`,
                            }
                        });

                        setAreas(areaData);

                        if (areaData.length > 0) {
                            let defaultData = areaData.filter((area) => area.code === 'US');
                            if (defaultData.length > 0) {
                                // setSelectedArea(defaultData[0]);
                            }
                        }

                        setIsLoading(false);
                    }));
        } catch (e) {
            setIsLoading(false);
            router.back();
        }
    }, []);

    return (
        <View className={'flex flex-1 items-center justify-center bg-primary opacity-95'}>
            {
                isLoading ? (
                    <Text className={'text-primary-foreground text-3xl font-mMedium'}>Loading...</Text>
                ) : (
                    <FlatList
                        data={areas}
                        contentContainerStyle={{marginTop: 20}}
                        renderItem={({item, index}) => {
                            let isSelected = selectedArea?.item === item.item;

                            return (
                                <TouchableOpacity className={'flex flex-row items-center p-2 justify-between'} onPress={() => {
                                    setSelectedArea(item);
                                    router.back();
                                }}>
                                    <View className={'flex flex-row space-x-3 items-center'}>
                                        <Image source={{uri: item.flag}} className={'h-7 w-7'}/>
                                        <Text className={`${isSelected ? 'text-secondary' : 'text-primary-foreground'} font-mSemiBold`}>{item.item} ({item.callingCode})</Text>
                                    </View>
                                    {isSelected && <CheckMarkIcon color={Colors.secondary.DEFAULT}/>}
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item) => item.code}
                        className={'p-5  mb-5'}
                    />
                )
            }

            {/** close button for modal */}
            <TouchableOpacity className={'absolute top-5 right-5 h-10 w-10 items-center justify-center bg-white rounded-full'} onPress={() => router.back()}>
                <AntDesign name='close' size={24} color='black'/>
            </TouchableOpacity>
        </View>
    );
}

export default CountryPicker;
