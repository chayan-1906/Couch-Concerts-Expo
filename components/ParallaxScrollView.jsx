import {Image, StyleSheet, View} from 'react-native';
import Animated, {interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset,} from 'react-native-reanimated';

const HEADER_HEIGHT = 300;

function ParallaxScrollView({children, headerImage, headerBackgroundColor}) {
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
        <View>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                {/** header */}
                <Animated.View className={'relative  flex flex-col justify-center items-center'} style={[styles.header, headerAnimatedStyle]}>
                    <Image source={headerImage.props.source} className={'absolute w-full h-full filter blur-sm'}/>
                    {headerImage}
                </Animated.View>

                {/** body content */}
                <View style={styles.content}>{children}</View>
            </Animated.ScrollView>
        </View>
    );
}

export default ParallaxScrollView;

const styles = StyleSheet.create({
    header: {
        height: HEADER_HEIGHT,
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        padding: 32,
        gap: 16,
        overflow: 'hidden',
    },
    absoluteFill: {
        ...StyleSheet.absoluteFillObject,
    },
    blurredImage: {
        filter: 'blur(100px)',
    },
});
