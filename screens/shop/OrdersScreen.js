import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../compnents/UI/HeaderButton';
import OrderItem from '../../compnents/shop/OrderItem';

const OrdersScreen = props => {
const orders = useSelector(state => state.orders.orders);

return (
<FlatList
data={orders}
keyExtractor={item => item.id}
renderItem = {itemData => (
<OrderItem
    amount={itemData.item.totalAmount}
    date={itemData.item.readableDate}
    items={itemData.item.items}
/>
)}
 />
);
};

OrdersScreen.navigationOptions = navData => {
    return {
        headrtTitle: 'Your Orders',
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
    };

};

export default OrdersScreen;