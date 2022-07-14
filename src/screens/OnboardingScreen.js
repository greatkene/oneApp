import React, {useState, useRef} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    StatusBar,
    FlatList,
    View,
    Image, 
    Text,
    TouchableOpacity
} from 'react-native'

import slides from '../const/slides';
import COLORS from '../const/color';

const { width, height } = Dimensions.get('window')


// Slide Component
const Slide = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={item?.image}
          style={{height: '75%', width, resizeMode: 'contain'}}
        />
        <View>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.subTitle}>{item?.subTitle}</Text>
        </View>
      </View>
    );
};

// Main Component
function OnboardingScreen({navigation}) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const ref = useRef(null)

       // For Updating Slides
       const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex)
    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        const offset = nextSlideIndex * width;
        ref?.current?.scrollToOffset({offset})
    }

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
      };

    // Footer Component
    const Footer = () => {
        return (
            <View 
                style={{
                    height: height * 0.25, 
                    justifyContent: 'space-between', 
                    paddingHorizontal: 20
            }}>
                <View 
                    style={{
                        flexDirection: 'row', 
                        justifyContent:'center', 
                        marginTop: 20
                }}>
                    {/* Indicator */}
                    {
                        slides.map((_, index) => (
                            <View 
                                key={index} 
                                style={[styles.indicator, 
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.primary,
                                    width: 25
                            }]} />
                        ))
                    }
                </View>
                {/* Button */}
                <View style={{marginBottom: 20}}>
                    {
                        currentSlideIndex == slides.length - 1 ? <View style={{height:50}}>
                        <TouchableOpacity style={[styles.btn]} onPress={()=>navigation.replace("HomeScreen")}>
                            <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 15}}>GET STARTED</Text>
                        </TouchableOpacity>
                    </View> : <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                            style={[styles.btn, 
                            {
                                backgroundColor: 'transparent',
                                borderWidth: 1,
                                borderColor: COLORS.primary
                        }]}
                        onPress={skip}>
                            <Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 15}}>SKIP</Text>
                        </TouchableOpacity>
                        {/* Creating Space Between Buttons */}
                        <View style={{width: 15}} />
                        <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                            <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 15}}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                        
                    }
                   
                    
                </View>
            </View>
        )
    }

 

    //  Main Component Return
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
            <StatusBar backgroundColor={COLORS.primary} />
            <FlatList 
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled={true}
                data={slides} 
                contentContainerStyle={{height: height * 0.75}} 
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
}

// Styles

const styles = StyleSheet.create({
    title: {
        color: COLORS.primary,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
       
    },
    subTitle: {
        color: COLORS.primary,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal:3,
        borderRadius: 2
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default OnboardingScreen;