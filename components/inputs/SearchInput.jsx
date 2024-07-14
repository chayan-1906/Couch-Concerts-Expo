import {TextInput, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";

function SearchInput({placeholder, searchText, setSearchText, onChange}) {
    return (
        <View className={'flex flex-row items-center h-11 pl-4 pr-2 mx-5 border border-gray-100 rounded-lg ml-5 mr-20 justify-between'}>
            <TextInput
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                placeholder={placeholder || 'Search...'}
                className={'flex-1 text-white font-mMedium'}
                keyboardType={'web-search'}
                autoFocus
                autoCapitalize={false}
            />
            {/* TODO: Replace with SVGs */}
            <AntDesign name="search1" size={20} color="gray"/>
        </View>
    );
}

export default SearchInput;
