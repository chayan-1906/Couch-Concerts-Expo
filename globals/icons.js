import {View} from "react-native";
import Svg, {Path} from "react-native-svg";

export const SearchIcon = ({color, size}) => {
    // return <MaterialIcons name="account-circle" size={size || 30} color={color || 'black'}/>;
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const ScoutIcon = ({color, size}) => {
    // return <MaterialIcons name="account-circle" size={size || 30} color={color || 'black'}/>;
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M4 6H2V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18V20H4M18 7H15V12.5C15 13.163 14.7366 13.7989 14.2678 14.2678C13.7989 14.7366 13.163 15 12.5 15C11.837 15 11.2011 14.7366 10.7322 14.2678C10.2634 13.7989 10 13.163 10 12.5C10 11.837 10.2634 11.2011 10.7322 10.7322C11.2011 10.2634 11.837 10 12.5 10C13.07 10 13.58 10.19 14 10.5V5H18M20 2H8C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4V16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const GuestProfileIcon = ({color, size}) => {
    // return <MaterialIcons name="account-circle" size={size || 30} color={color || 'black'}/>;
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M12 19.2C9.5 19.2 7.29 17.92 6 16C6.03 14 10 12.9 12 12.9C14 12.9 17.97 14 18 16C16.71 17.92 14.5 19.2 12 19.2ZM12 5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8C15 8.79565 14.6839 9.55871 14.1213 10.1213C13.5587 10.6839 12.7956 11 12 11C11.2044 11 10.4413 10.6839 9.87868 10.1213C9.31607 9.55871 9 8.79565 9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const ArtistProfileIcon = ({color, size}) => {
    // return <MaterialCommunityIcons name="account-music" size={size || 24} color={color || 'black'}/>;
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M11.7806 14.2351C12.7806 14.2351 13.8306 14.3951 14.9806 14.6751C14.1706 15.5451 13.7806 16.5651 13.7806 17.7351C13.7806 18.6251 14.0306 19.4651 14.5606 20.2351H3.78064V18.2351C3.78064 17.0451 4.69064 16.0851 6.52064 15.3551C8.35064 14.6151 10.1106 14.2351 11.7806 14.2351ZM11.7806 12.2351C10.7006 12.2351 9.78064 11.8451 8.96064 11.0651C8.16064 10.2851 7.78064 9.34511 7.78064 8.23511C7.78064 7.15511 8.16064 6.23511 8.96064 5.41511C9.78064 4.61511 10.7006 4.23511 11.7806 4.23511C12.8906 4.23511 13.8306 4.61511 14.6106 5.41511C15.3906 6.23511 15.7806 7.15511 15.7806 8.23511C15.7806 9.34511 15.3906 10.2851 14.6106 11.0651C13.8306 11.8451 12.8906 12.2351 11.7806 12.2351ZM19.2806 10.2351H20.7806H22.7806V12.2351H20.7806V17.7351C20.7806 18.3981 20.5172 19.034 20.0484 19.5029C19.5796 19.9717 18.9437 20.2351 18.2806 20.2351C17.6176 20.2351 16.9817 19.9717 16.5129 19.5029C16.044 19.034 15.7806 18.3981 15.7806 17.7351C15.7806 17.0721 16.044 16.4362 16.5129 15.9673C16.9817 15.4985 17.6176 15.2351 18.2806 15.2351C18.6406 15.2351 18.9706 15.3051 19.2806 15.4451V10.2351Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const HostProfileIcon = ({color, size}) => {
    // return <FontAwesome6 name="building-columns" size={size || 24} color={color}/>
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M18.7806 15.2351H16.7806V17.2351H18.7806M18.7806 11.2351H16.7806V13.2351H18.7806M20.7806 19.2351H12.7806V17.2351H14.7806V15.2351H12.7806V13.2351H14.7806V11.2351H12.7806V9.23511H20.7806M10.7806 7.23511H8.78064V5.23511H10.7806M10.7806 11.2351H8.78064V9.23511H10.7806M10.7806 15.2351H8.78064V13.2351H10.7806M10.7806 19.2351H8.78064V17.2351H10.7806M6.78064 7.23511H4.78064V5.23511H6.78064M6.78064 11.2351H4.78064V9.23511H6.78064M6.78064 15.2351H4.78064V13.2351H6.78064M6.78064 19.2351H4.78064V17.2351H6.78064M12.7806 7.23511V3.23511H2.78064V21.2351H22.7806V7.23511H12.7806Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const AndroidBackIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 20 20">
                <Path
                    d="M18.7912 11.3152C19.3412 11.3152 19.7912 11.7652 19.7912 12.3152C19.7912 12.8652 19.3412 13.3152 18.7912 13.3152H7.62124L12.4912 18.2052C12.8812 18.5952 12.8812 19.2252 12.4912 19.6152C12.3044 19.8024 12.0508 19.9077 11.7862 19.9077C11.5217 19.9077 11.2681 19.8024 11.0812 19.6152L4.50124 13.0152C4.11124 12.6252 4.11124 11.9952 4.50124 11.6052L11.0912 5.01519C11.4812 4.62519 12.1112 4.62519 12.5012 5.01519C12.8912 5.40519 12.8912 6.04519 12.5012 6.43519L7.62124 11.3152H18.7912Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const IOSBackIcon = ({color, size}) => {
    return (
        <View>
            {/*<Svg width={size || 24} height={size || 24} viewBox="0 0 20 20">
                <Path d="M15 18L9 12L15 6" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>*/}

            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-chevron-left">
                <Path d="m15 18-6-6 6-6"/>
            </Svg>
        </View>
    );
}

export const DoubleRightArrowIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path d="M5.58997 7.41L6.99997 6L13 12L6.99997 18L5.58997 16.59L10.17 12L5.58997 7.41ZM11.59 7.41L13 6L19 12L13 18L11.59 16.59L16.17 12L11.59 7.41Z" fill={color}/>
            </Svg>
        </View>
    );
}

export const ArrowRightIcon = ({color, size}) => {
    return (
        <View>
            {/*<Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" className={'lucide lucide-move-right'}>
                <Path d="M18 8L22 12L18 16" fill={color}/>
                <Path d="M2 12H22" fill={color}/>
            </Svg>*/}

            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-move-right">
                <Path d="M18 8L22 12L18 16"/>
                <Path d="M2 12H22"/>
            </Svg>
        </View>
    );
}

export const CloseIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z" fill={color}/>
            </Svg>
        </View>
    );
}

export const ChevronDownIcon = ({color, size}) => {
    return (
        <View className={''}>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path d="M7.41 8.57996L12 13.17L16.59 8.57996L18 9.99996L12 16L6 9.99996L7.41 8.57996Z" fill={color}/>
            </Svg>
        </View>
    );
}

export const CheckMarkIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z" fill={color}/>
            </Svg>
        </View>
    );
}

export const RefreshIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const SettingsIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M9.72933 6C10.7902 6 11.8076 6.42143 12.5578 7.17157C13.3079 7.92172 13.7293 8.93913 13.7293 10C13.7293 11.0609 13.3079 12.0783 12.5578 12.8284C11.8076 13.5786 10.7902 14 9.72933 14C8.66847 14 7.65105 13.5786 6.9009 12.8284C6.15076 12.0783 5.72933 11.0609 5.72933 10C5.72933 8.93913 6.15076 7.92172 6.9009 7.17157C7.65105 6.42143 8.66847 6 9.72933 6ZM9.72933 8C9.1989 8 8.69019 8.21071 8.31512 8.58579C7.94005 8.96086 7.72933 9.46957 7.72933 10C7.72933 10.5304 7.94005 11.0391 8.31512 11.4142C8.69019 11.7893 9.1989 12 9.72933 12C10.2598 12 10.7685 11.7893 11.1435 11.4142C11.5186 11.0391 11.7293 10.5304 11.7293 10C11.7293 9.46957 11.5186 8.96086 11.1435 8.58579C10.7685 8.21071 10.2598 8 9.72933 8ZM7.72933 20C7.47933 20 7.26933 19.82 7.22933 19.58L6.85933 16.93C6.22933 16.68 5.68933 16.34 5.16933 15.94L2.67933 16.95C2.45933 17.03 2.18933 16.95 2.06933 16.73L0.0693316 13.27C-0.0606684 13.05 -0.000668302 12.78 0.189332 12.63L2.29933 10.97L2.22933 10L2.29933 9L0.189332 7.37C-0.000668302 7.22 -0.0606684 6.95 0.0693316 6.73L2.06933 3.27C2.18933 3.05 2.45933 2.96 2.67933 3.05L5.16933 4.05C5.68933 3.66 6.22933 3.32 6.85933 3.07L7.22933 0.42C7.26933 0.18 7.47933 0 7.72933 0H11.7293C11.9793 0 12.1893 0.18 12.2293 0.42L12.5993 3.07C13.2293 3.32 13.7693 3.66 14.2893 4.05L16.7793 3.05C16.9993 2.96 17.2693 3.05 17.3893 3.27L19.3893 6.73C19.5193 6.95 19.4593 7.22 19.2693 7.37L17.1593 9L17.2293 10L17.1593 11L19.2693 12.63C19.4593 12.78 19.5193 13.05 19.3893 13.27L17.3893 16.73C17.2693 16.95 16.9993 17.04 16.7793 16.95L14.2893 15.95C13.7693 16.34 13.2293 16.68 12.5993 16.93L12.2293 19.58C12.1893 19.82 11.9793 20 11.7293 20H7.72933ZM8.97933 2L8.60933 4.61C7.40933 4.86 6.34933 5.5 5.57933 6.39L3.16933 5.35L2.41933 6.65L4.52933 8.2C4.12933 9.37 4.12933 10.64 4.52933 11.8L2.40933 13.36L3.15933 14.66L5.58933 13.62C6.35933 14.5 7.40933 15.14 8.59933 15.38L8.96933 18H10.4893L10.8593 15.39C12.0493 15.14 13.0993 14.5 13.8693 13.62L16.2993 14.66L17.0493 13.36L14.9293 11.81C15.3293 10.64 15.3293 9.37 14.9293 8.2L17.0393 6.65L16.2893 5.35L13.8793 6.39C13.1093 5.5 12.0493 4.86 10.8493 4.62L10.4793 2H8.97933Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const AwardIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M20.39 19.37L16.38 18L15 22L11.92 16L8.99999 22L7.61999 18L3.60999 19.37L6.52999 13.37C5.56999 12.17 4.99999 10.65 4.99999 9C4.99999 7.14348 5.73748 5.36301 7.05024 4.05025C8.36299 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 10.65 18.43 12.17 17.47 13.37L20.39 19.37ZM6.99999 9L9.68999 10.34L9.49999 13.34L12 11.68L14.5 13.33L14.33 10.34L17 9L14.32 7.65L14.5 4.67L12 6.31L9.49999 4.65L9.66999 7.66L6.99999 9Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const EditIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M20.71 7.04006C21.1 6.65006 21.1 6.00006 20.71 5.63006L18.37 3.29006C18 2.90006 17.35 2.90006 16.96 3.29006L15.12 5.12006L18.87 8.87006M3 17.2501V21.0001H6.75L17.81 9.93006L14.06 6.18006L3 17.2501Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}

export const CalendarPlusIcon = ({color, size}) => {
    return (
        <View>
            <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24">
                <Path
                    d="M19 19V8H5V19H19ZM16 1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1H8V3H16V1ZM11 9.5H13V12.5H16V14.5H13V17.5H11V14.5H8V12.5H11V9.5Z"
                    fill={color}/>
            </Svg>
        </View>
    );
}
