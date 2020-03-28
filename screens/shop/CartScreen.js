import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../compnents/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as ordersActions from '../../store/actions/orders';

const CartScreen = props => {
const cartTotalAmount = useSelector(state => state.cart.totalAmount);
const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for(const key in state.cart.items) {
        transformedCartItems.push({
            productId: key,
            productTitle: state.cart.items[key].productTitle,
            productPrice: state.cart.items[key].productPrice,
            quantity: state.cart.items[key].quantity,
            sum: state.cart.items[key].sum
        });
    }
        // javascript code to sort items in the cart 
    return transformedCartItems.sort((a, b) =>
    a.productId > b.productId ? 1 : -1
    );
});
const dispatch = useDispatch();


    return (
    <View style={styles.screen}>
        <View style={styles.summary}>
<Text style={styles.summaryText}>
Total: <Text style={styles.amount}>{cartTotalAmount.toFixed(2)} Kr</Text>
</Text>
<Button
color={Colors.primary}
title="Order Now"
disabled={cartItems.length === 0}
onPress={() => {
    dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
}}
/>
        </View>
<FlatList
data={cartItems}
keyExtractor={item => item.productId}
renderItem={itemData => (
    <CartItem
    quantity={itemData.item.quantity}
    title={itemData.item.productTitle}
    amount={itemData.item.sum}
    deletable
    onRemove= {() => {
dispatch(cartActions.removeFromCart(itemData.item.productId));
    }}
 />
 )}
/>
</View>
  );
};

CartScreen.navigationOptions = {
    headrtTitle: 'Your Cart'
    };

const styles = StyleSheet.create({
    screen:{
margin:20,
    },
    summary:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
marginBottom:20,
padding: 10,
borderRadius: 10,
backgroundColor:'white',
        // iOS Shadow
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width: 0, height: 2},
        shadowRadius:8,
            // Android Shadow
        elevation: 5
    },
    summaryText:{
fontFamily:'Futura-Bold',
fontSize: 18
    },
    amount:{
color: Colors.primary
    }

});

export default CartScreen;