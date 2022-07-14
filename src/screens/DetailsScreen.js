import React from 'react';
import { Text, TouchableOpacity, StyleSheet, StatusBar, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';


import COLORS from '../const/color';
import { icons } from '../const';


const StarReview = ({ rate }) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5 - rate)
    var halfStar = 5 - fullStar - noStar

    // Full Star
    for (var i = 0; i < fullStar; i++) {
        starComponents.push(
            <Image
                key={`full-${i}`}
                source={icons.starFull}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

     // Half Star
     for (var i = 0; i < halfStar; i++) {
        starComponents.push(
            <Image
                key={`half-${i}`}
                source={icons.starHalf}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    // No Star
    for (var i = 0; i < noStar; i++) {
        starComponents.push(
            <Image
                key={`empty-${i}`}
                source={icons.starEmpty}
                resizeMode="cover"
                style={{
                    width: 20,
                    height: 20,
                }}
            />
        )
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {starComponents}
            <Text style={{ marginLeft: 8, color: COLORS.gray, fontSize: 16 }}>{rate}</Text>
        </View>
    )
}

const IconLabel = ({icon, label}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <View style={{backgroundColor: COLORS.primary, borderRadius: 20, padding: 10}}>
                <Icon name={icon} color={COLORS.orange} size={45} />
            </View>
            <Text style={{marginTop: 10, color: COLORS.primary}}>{label}</Text>
        </View>
    )
}

// Main Component
function DetailsScreen({navigation, route}) {
    const place = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{flex:2}}>
                <Image 
                    source={place.image}
                    resizeMode= 'cover'
                    style={{
                        width: '100%',
                        height: '80%'
                    }}
                />
                <View 
                    style={[{
                        position: 'absolute',
                        bottom: '1%',
                        left: '5%',
                        right: '5%',
                        borderRadius: 15,
                        padding: 18,
                        backgroundColor: COLORS.offwhite
                    }, styles.shadow]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            <Image 
                                source={place.image}
                                resizeMode= 'cover'
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 15
                                }}
                            />
                        </View>

                        <View style={{ marginHorizontal: 24, justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 16 }}>{place.name}</Text>
                            <Text style={{ color: 'grey', fontSize: 16  }}>{place.location}</Text>
                            <StarReview rate={4.5} />
                        </View>
                    </View>

                    <View style={{marginTop: 12}}>
                        <Text style={{ color: 'grey', fontSize: 16, lineHeight: 22 }}>
                            {place.details}
                        </Text>
                    </View>
                </View>

                {/* Header BTN */}
                <View
                    style={{
                        position: 'absolute',
                        top: 50,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('HomeScreen') }}
                        >
                            <Icon name='arrow-back-ios' size={26}  style={{color: COLORS.dark}} />
                            
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Menu on pressed") }}
                        >
                            <MaterialCommunityIcons name='dots-vertical' size={26}  />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Body */}
            
            <View style={{flex: 1.5}}>
                {/* Icons */}
                <View style={{flexDirection: 'row', marginTop: 18, paddingHorizontal:45, justifyContent: 'space-between'  }}>
                    <IconLabel
                        icon='home'
                        label="Villa"
                        
                    />
                    <IconLabel
                        icon='local-parking'
                        label="Parking"
                    />
                    <IconLabel
                        icon='wifi'
                        label="Free Wifi"
                    />
                    
                </View>

                {/* About */}
                <View style={{marginTop:24, paddingHorizontal: 22}}>
                    <Text style={{fontSize: 22}}>About</Text>
                    <Text style={{marginTop:12, color: 'grey', fontSize: 13, lineHeight: 22}}>{place.about}</Text>
                </View>
            </View>

            {/* Book BTN */}
            <View style={{flex: 0.5, paddingHorizontal: 12}}>
                <LinearGradient
                    style={[{ height: 70, width: '100%', borderRadius: 15 }]}
                    colors={[COLORS.primary, COLORS.orange]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex:1, marginHorizontal:24, justifyContent: 'center' }}>
                            <Text style={{color: COLORS.white, fontSize: 24, fontWeight: '500'}}>{place.price}</Text>
                        </View>
                        <TouchableOpacity 
                            style={{ width: 130, height: '70%', marginHorizontal: 12, }}
                            onPress={() => { console.log("Booked") }}
                        >
                            <LinearGradient 
                                style={[{ flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                                colors={[COLORS.dark, COLORS.primary]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold', lineHeight:30 }}>BOOK NOW</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: COLORS.offwhite
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default DetailsScreen;