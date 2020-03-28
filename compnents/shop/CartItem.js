import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = props => {
return (
    <View style={styles.cartItem}>
        <View style={styles.itemData} >
            <Text style={styles.quantity}>{props.quantity}x </Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.itemData}>
            <Text style={styles.amount}>{props.amount.toFixed(2)} Kr</Text>
            { props.deletable && (
            <TouchableOpacity
            style={styles.deleteButton}
            //onPress={props.onRemove}
            >
                <Ionicons
                name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                size={23}
                color="red"
                 />
            </TouchableOpacity>
            )}
        </View>
    </View>
);
};

const styles = StyleSheet.create({
    cartItem: {
        margin: 1,
        padding: 10,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 20
        },
    itemData: {
        flexDirection:'row',
        alignItems:'center'
    },
    quantity: {
    fontFamily: 'Futura-Bold',
    color:'#888',
    fontSize: 16
    },
    title: {
        fontFamily: 'Futura-Book',
        fontSize: 16
    },
    amount: {
        fontFamily: 'Futura-Book',
        fontSize: 16
    },
    deleteButton:{
        marginLeft: 20,
    }

});

export default CartItem;