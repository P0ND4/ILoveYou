import React from 'react';
import { View, FlatList, Image, Dimensions, Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Layout from '../components/Layout';

const images = [
    require('../images/LINDA!.jpg'),
    require('../images/Polish_20201207_221554634.jpg'),
    require('../images/PSX_20210621_175305.jpg'),
    require('../images/PSX_20210101_204726.jpg'),
    require('../images/PSX_20210107_113907.jpg'),
    require('../images/PSX_20210107_152552.jpg'),
    require('../images/PSX_20210115_153215.jpg'),
    require('../images/PSX_20210601_182452.jpg'),
    require('../images/PSX_20210526_222314.jpg'),
    require('../images/PSX_20210125_130649.jpg'),
    require('../images/PSX_20210131_184025.jpg'),
    require('../images/PSX_20210502_214553.jpg'),
    require('../images/PSX_20210224_095226.jpg'),
    require('../images/PSX_20210317_103310.jpg'),
    require('../images/PSX_20210726_222304.jpg'),
    require('../images/PSX_20210904_193538.jpg'),
    require('../images/PSX_20210913_163116.jpg'),
    require('../images/PSX_20211229_222827.jpg'),
    require('../images/IMG_20210918_123222.jpg'),
    require('../images/IMG-20210411-WA0040.jpg'),
    require('../images/IMG-20211018-WA0141.jpg'),
    require('../images/IMG_20210605_174905.jpg'),
    require('../images/IMG-20210919-WA0014.jpg'),
    require('../images/IMG-20210803-WA0047.jpg')
];


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CONTAINER_WIDTH = width * 0.7;
const SIDE_SPACE = (width - CONTAINER_WIDTH) / 2;
const SPACE = 10;
const HEIGHT_BACKDROP = height * 0.5;

function BackDrop ({ scrollX }){
    return (
        <View style={[
            { 
                height: HEIGHT_BACKDROP, 
                width: '100%',
                position: 'absolute',
                top: 0
            }
        ], StyleSheet.absoluteFillObject}>
            {images.map(( image, index ) => {
                const inputRange = [
                    (index - 1) * CONTAINER_WIDTH,
                    index * CONTAINER_WIDTH,
                    (index + 1) * CONTAINER_WIDTH
                ];

                const outputRange = [0, 1, 0];

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange
                });
                return (
                    <Animated.Image 
                        source={image} 
                        key={index}
                        blurRadius={8}
                        style={[
                            { 
                                height: HEIGHT_BACKDROP, 
                                width,
                                position: 'absolute',
                                top: 0,
                                opacity
                            }
                        ]}
                    />
                );
            })}
            <LinearGradient
                colors={["transparent", "#222831"]}
                style={{ 
                    height: HEIGHT_BACKDROP,
                    width,
                    position: "absolute",
                    top: 0
                }}
            />
        </View>
    );
};


const HomeScreen = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <Layout>
            <BackDrop scrollX={scrollX}/>
            <Animated.FlatList 
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } }}],{ useNativeDriver: true })}
                data={images}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 150,
                    paddingHorizontal: SIDE_SPACE
                }}
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToInterval={CONTAINER_WIDTH}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * CONTAINER_WIDTH,
                        index * CONTAINER_WIDTH,
                        (index + 1) * CONTAINER_WIDTH
                    ];

                    const outputRange = [0, -50, 0];

                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange
                    });

                    return (
                        <View style={{width: CONTAINER_WIDTH}}>
                            <Animated.View style={{
                                marginHorizontal: SPACE,
                                padding: SPACE,
                                borderRadius: 34,
                                alignItems: 'center',
                                transform: [{ translateY }]
                            }}>
                                <Image source={item} style={styles.posterImage}/>
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    posterImage: {
        width: "100%",
        height: CONTAINER_WIDTH * 1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 10
    }
});

export default HomeScreen;