import React from 'react';
import {
    SafeAreaView, 
    StyleSheet, 
    StatusBar, 
    View, 
    Text,
    ScrollView, 
    TextInput, 
    FlatList, 
    Dimensions,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


import ListCategories from '../components/ListCategories';
import places from '../const/places';


import COLORS from '../const/color';
import RecommendedCard from '../components/RecommendedCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen')


function HomeScreen({navigation, place}) {

    // Home Cards Section
const HomeSectionCard = ({place}) => {
    return (
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', place)}>
            <View style={styles.placeContainer}>
                <View style={styles.placeCards}>
                        {/* Places Image */}
                        <Image source={place.image} style={styles.placeCardImage} />
                        {/* Title */}
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}> {place.name} </Text>
                        <View style={{flexDirection: 'row', marginTop:15}}>
                                <Icon name='star' size={20} style={{marginRight: 4, color: COLORS.red}} />
                                <Text style={{fontSize: 17, color:'grey'}}>4.6</Text>
                        </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingVertical: 5}}>
                            <Icon name='location-on' color={COLORS.red} size={17} />
                            <Text style={{marginTop: -2, marginLeft: 5, fontSize: 17, fontWeight: '500', color: 'grey'}}> {place.location} </Text>
                        </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} />
            <View style={styles.header}>
                <Icon name="sort" size={35} />
                <Text style={{fontSize: 17, fontWeight: '500', marginTop: 8, color: COLORS.primary}}>Welcome To One Travel</Text>
                <Icon name="notifications-none" size={35} />
            </View>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={styles.textContainer}>
                    <Text style={styles.headerTitle}>Where do you</Text>
                    <Text style={styles.headerTitle}>wanna go?</Text>
                    <View style={styles.inputContainer}>
                        <Icon name='search' size={28} />
                        <TextInput 
                            placeholder='Where do you want to go?' 
                            style={{color: COLORS.grey, fontSize: 15, paddingHorizontal: 20 }} 
                        />
                    </View>
                </View>
                {/* Category */}
                <ListCategories />
                <Text style={styles.sectionTitle}>Places</Text>
                <View>
                    <FlatList 
                        contentContainerStyle={{paddingLeft: 20}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places} 
                        renderItem={({item}) => 
                            <HomeSectionCard place={item} />
                        }
                    />
                    <Text style={styles.sectionTitle}>Recommended</Text>
                    <View>
                        <FlatList 
                            contentContainerStyle={{paddingLeft: 20}}
                            snapToInterval={width - 20}
                            data={places} 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({item}) => <RecommendedCard place={item} />}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.offwhite
    },
    header: {
        paddingVertical: 15,
        paddingHorizontal:20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    headerTitle: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 27
    },
    inputContainer: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.offwhite,
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 15,
        marginTop: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    subheaderTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: "#15133C",
        marginBottom: 5
    },
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 17
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    // Home Card Desgns
    placeCards: {
        height: 222,
        width: width / 1.5,
        elevation: 15,
        // alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal:10,
        overflow:'hidden'
    },
    placeCardImage: {
        height: 140,
        borderRadius: 10,
        width: '100%',
    },
    placeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginLeft: -10
    }
})

export default HomeScreen;