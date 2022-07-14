import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


import COLORS from '../const/color';

const {width} = Dimensions.get('screen')


function RecommendedCard({place}) {
    return (
        <ImageBackground style={styles.rmCardImage} source={place.image}>
            <Text 
                style={{
                    color: COLORS.white, 
                    fontSize: 22, 
                    fontWeight: 'bold', 
                    marginTop: 10  
                }}>
                    {place.name}
                </Text>
                <View style={{flex:1, justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="place" size={22} color={COLORS.white}  />
                            <Text style={{color: COLORS.white, marginLeft: 5}} >{place.location}</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 10}}>
                            <Icon name="star" size={22} color={COLORS.white}  />
                            <Text style={{color: COLORS.white, marginLeft: 5}} >4.6</Text>
                        </View>
                    </View>
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    rmCardImage: {
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10
    }
})

export default RecommendedCard;