import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from "../../compnents/shop/ProductItem";
import * as cartActions from '../../store/actions/cart';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../compnents/UI/HeaderButton';


const ProductsOverViewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

return (
<FlatList
data={products}
keyExtractor={item => item.id}
renderItem={itemData => (
<ProductItem
image={itemData.item.imageUrl}
title={itemData.item.title}
price={itemData.item.price}
onViewDetails={() => {
    props.navigation.navigate( 'ProductDetail' ,{
        productId: itemData.item.id,
        productTitle: itemData.item.title
    });
}}
onAddToCart={() => {
dispatch(cartActions.addToCart(itemData.item));
}}
/>
)}
/>
);
};

ProductsOverViewScreen.navigationOptions = navData => {
    return {
    headerTitle: 'All Products',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
        title='Menu'
        iconName={'md-menu'}
        onPress={ () => {
            navData.navigation.toggleDrawer();
        }} 
        />
    </HeaderButtons> ),

    headerRight :() => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
        title='Cart'
        iconName={'md-cart'}
        onPress={ () => {
            navData.navigation.navigate('Cart')
        }} 
        />
    </HeaderButtons> )
}};

export default ProductsOverViewScreen;