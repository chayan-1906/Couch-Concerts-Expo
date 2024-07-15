import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated, {interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset,} from 'react-native-reanimated';
import {RefreshIcon, SettingsIcon} from "../../globals/icons";
import Colors from "../../constants/Colors";
import printInConsole from "../../globals/functions/printInConsole";

const HEADER_HEIGHT = 300;

function ParallaxScrollView({children, headerImage, headerContent, headerBackgroundColor, showRefresh = true, refreshOnTap}) {
    const scrollRef = useAnimatedRef();
    const scrollOffset = useScrollViewOffset(scrollRef);

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                    ),
                },
                {
                    scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
                },
            ],
        };
    });

    return (
        <View className={'flex relative flex-1 bg-primary'}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
                <Animated.View className={'relative flex flex-col justify-center items-center'} style={[styles.header, headerAnimatedStyle]}>
                    {/** blurred bg */}
                    <View className='absolute w-full h-full'>
                        <Image source={headerImage.props.source} blurRadius={20} className={'w-full h-full'}/>
                    </View>
                    {/** image */}
                    <View className={'pt-5'}>{headerImage}</View>

                    {/** header content */}
                    {headerContent}
                </Animated.View>
                <View style={styles.content}>{children}</View>
            </Animated.ScrollView>

            {showRefresh && (
                <TouchableOpacity className={'absolute top-11 right-16'} onPress={refreshOnTap}>
                    <RefreshIcon color={Colors.white} size={28}/>
                </TouchableOpacity>
            )}

            <TouchableOpacity className={'absolute top-12 right-5'} onPress={() => printInConsole('settings tapped')}>
                <SettingsIcon color={Colors.white}/>
            </TouchableOpacity>
        </View>
    );
}

export default ParallaxScrollView;

const styles = StyleSheet.create({
    header: {
        height: HEADER_HEIGHT,
        overflow: 'hidden',
    },
});
