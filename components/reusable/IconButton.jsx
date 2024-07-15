import {Text, TouchableOpacity} from "react-native";

function IconButton({icon, text, onPress, color, bgColor}) {
    return (
        <TouchableOpacity className={`flex flex-row space-x-2 flex-1 items-center justify-center bg-secondary py-2 px-4 rounded-lg ${bgColor}`} onPress={onPress}>
            {icon}
            <Text className={`text-primary-foreground font-mSemiBold ${color}`}>{text}</Text>
        </TouchableOpacity>
    );
}

export default IconButton;
