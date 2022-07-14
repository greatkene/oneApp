import React from 'react';
import { View, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../const/color';

const categoryIcons = [
    <Icon name='flight' size={25} />,       
    <Icon name='home' size={25} />,
    <Icon name='local-restaurant' size={25} />,
    <Icon name='spa' size={25} />
 
]

function ListCategories(props) {
    return (
        <>
            <Text style={{fontWeight: 'bold', fontSize: 17,marginHorizontal: 20, marginTop:20}}>Categories</Text>
            <View style={styles.categoryContainer}>
                {
                    categoryIcons.map((icon, index) => (
                    <View key={index} style={styles.iconContainer}> 
                        {icon}
                    </View>))
                }
            </View>
        </>
       
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})

export default ListCategories;