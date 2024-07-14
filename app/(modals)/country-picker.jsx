import {ActivityIndicator, FlatList, Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {useRouter} from "expo-router";
import {useCouchConcertsContext} from "../../contexts/CouchConcertsContext";
import {CheckMarkIcon} from "../../globals/icons";
import Colors from "../../constants/Colors";
import SearchInput from "../../components/inputs/SearchInput";
import isStringInvalid from "../../globals/functions/isStringInvalid";

function CountryPicker() {
    const [areas, setAreas] = useState([]);
    const [filteredAreas, setFilteredAreas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
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
                            };
                        });

                        setAreas(areaData);
                        setFilteredAreas(areaData);

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

    /** filter based on searchText */
    useEffect(() => {
        if (isStringInvalid(searchText)) {
            setFilteredAreas(areas);
        } else {
            const filtered = areas.filter((area) => {
                let {code, item, callingCode} = area;
                return [code.toLowerCase(), item.toLowerCase(), callingCode.toLowerCase()].some(text => text.includes(searchText.toLowerCase()));
            });
            setFilteredAreas(filtered);
        }
    }, [searchText]);

    return (
        <View className={'flex flex-1 w-full h-full items-center bg-primary opacity-95'}>
            {
                isLoading ? (
                    <View className={'flex h-full items-center justify-center'}>
                        <ActivityIndicator color={Colors.gray["100"]}/>
                    </View>
                ) : (
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={-35} className={'flex flex-col w-full mt-5 space-y-2'}>
                        <SearchInput placeholder={'Search for countries...'} searchText={searchText} setSearchText={setSearchText}/>
                        <FlatList
                            data={filteredAreas}
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
                            className={'px-5 mb-14'}
                        />
                    </KeyboardAvoidingView>
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
