import React from 'react';
import { View,Text,Image,StyleSheet, Button, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';


const ProductItem = props => {
return (
    <TouchableOpacity onPress={props.onViewDetails} >

<View style={styles.product}>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={{uri: props.image}} />
    </View>

<View style={styles.details}>
<Text style={styles.title}>{props.title}</Text>
<Text style={styles.price}>{props.price.toFixed(2)} Kr</Text>
</View>

    <View style={styles.actions}>
    <Button color={Colors.primary} title="View Details" onPress={props.onViewDetails}/>
    <Button color={Colors.primary} title="Add To Cart" onPress={props.onAddToCart}/>
    </View>
</View>

</TouchableOpacity>

);
};

const styles = StyleSheet.create ({
product: {
    borderRadius: 10,
    backgroundColor:'white',
    height:300,
    margin: 20,
        // iOS Shadow
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width: 0, height: 2},
        shadowRadius:8,
            // Android Shadow
        elevation: 5
},
image: {
width:'100%',
height:'100%'
},
title: {
    fontFamily:'Futura-Bold',
    fontSize: 18,
    marginVertical:4
    },
price: {
        fontSize: 14,
        color:'#888'
},
actions: {
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
height:'20%',
paddingHorizontal: 20,
marginBottom: 20
},
details: {
    alignItems:'center',
    height:'20%',
    padding: 10
},
imageContainer: {
width: '100%',
height: '60%',
borderTopLeftRadius: 10,
borderTopRightRadius: 10,
//overflow to effect on all child layers inside the container like the image
overflow: 'hidden'
}
});

export default ProductItem;